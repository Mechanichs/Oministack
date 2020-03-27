//Imports
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const { page = 1} = request.query
        
        const incidents = await connection('incidents').select('*'); //busca na tabela incidents todos os campos de todos os registros da tabela ongs.

        return response.json(incidents); //retorna para o usuario o array incidents com todas as informacoes puxadas da tabela incidents no comando assima.
    },
    

    async create(request, response){
        const {title, description, value} = request.body; //requisita o body param do incident.
        const ong_id = request.headers.authorization; //requisita o id da ong que esta no header pela palavra chave "authorization".

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
        const { id } = request.params; //requisita o route param "id" do incident.
        const ong_id = request.headers.authorization; //requisita o id da ong que esta no header pela palavra chave "authorization".

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id) { //se o id da ong nao bater com o id da ong que cadastrou o caso.
            return response.status(401).json({error: 'Operation not permited'}); // envia uma mensagem de erro informando que a ong nao tem  permissao para deletar esse CacheStorage.
        }

        await connection('incidents').where('id', id).delete(); //deleta o caso, com o id determinado, da tabela incidents.

        return response.status(204).send();
    },
};