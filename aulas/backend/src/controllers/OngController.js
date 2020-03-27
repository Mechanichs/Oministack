//Imports
const connection = require('../database/connection'); //importa o objeto connection que está sendo exportado pelo arquivo connection
const crypto = require('crypto'); //importa um objeto crypto que faz parte do JS.


//as funcoes abaixo foram criadas, e seus nomes foram ditados pelo desenvolvedor, não são nomes fixos.
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //busca na tabela ongs todos os campos de todos os registros da tabela ongs.
    
        return response.json(ongs); //retorna para o usuario o array ongs com todas as informacoes puxadas da tabela ongs no comando assima.
    },

    async create(request, response) { //async indica que a funcao utilizada e assincrona
        const {name, email, whatsapp, city, uf} = request.body; //armazena todas as informacoes do json(que esta sendo requisitada pelo "request.body") em variaveis especificas para cada informacao.
        
        const id = crypto.randomBytes(4).toString('HEX'); //gera um hexadecimal de 4 bytes com numeros e letras aleatórios

        await connection('ongs').insert({ //await indica que o codigo deve esperrar a execucao desse comando acabar e, so apos o termino, o codigo deve continuar.
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id }); // retorna para o usuario apenas o id, que sera utilizado pra realizar os logins.

    }
};