//Imports
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;                   //se o parametro page nao existir ele automaticamente sera setado como 1.

        const [count] = await connection('incidents').count();//os couchetes, nesse caso, fazem com que a variavel receba a primeira posicao do array retornado pela connection().
                                                              //atribui a variavel count o numero de casos existentes.
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //join() e usado para relacionar dados de duas tabelas (join('quero_dessa_tabela_os_dados_cujo', 'esse_dado_da_tabela', '=', 'igual_a_esse_dado_da_outra_tabela')).
            .limit(5)                                         //limita o numero de casos por pagina a 5.
            .offset((page - 1) * 5)                           //define quais serao os casos que serao mostrados naquela pagina.
            .select('incidents.*',   //todos dessa tabela     //seleciona quais dados eu quero das tabelas.
                    'ongs.name',     //"name" dessa tabela
                    'ongs.email',    //"email" dessa tabela
                    'ongs.whatsapp', //"whatsapp" dessa tabela
                    'ongs.city',     //"city" dessa tabela
                    'ongs.uf');      //"uf" dessa tabela

        response.header('X-Total-Count', count['count(*)']);  //retorna para o header de resposta o numero de casos existentes.
        
        return response.json(incidents);                      //retorna para o usuario o array incidents com todas as informacoes puxadas da tabela incidents no comando assima.
    },
    

    async create(request, response){
        const {title, description, value} = request.body;      //requisita o body param do incident.
        const ong_id = request.headers.authorization;          //requisita o id da ong que esta no header pela palavra chave "authorization".

        const result = await  connection('incidents').insert({ //a variavel "result" recebera um array com todas as variaveis inseridas.
            title,
            description,
            value,
            ong_id,
        });

        const id = result[0]; //extrai o valor do id que será retornado para a variável array "result" como resiltado do connection.

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;                //requisita o route param "id" do incident.
        const ong_id = request.headers.authorization; //requisita o id da ong que esta no header pela palavra chave "authorization".

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id) {                                          //se o id da ong nao bater com o id da ong que cadastrou o caso.
            return response.status(401).json({error: 'Operation not permited'}); // envia uma mensagem de erro informando que a ong nao tem  permissao para deletar esse CacheStorage.
        }

        await connection('incidents').where('id', id).delete();                  //deleta o caso, com o id determinado, da tabela incidents.

        return response.status(204).send();                                      //retorna uma mensagem com o status 204.
    },
};