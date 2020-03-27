//Imports
const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id) // compara se o id da ong que esta logando esta presente na tabela do banco de dados.
        .select('name') //seleciona apenas o nome da ong para retornar.
        .first(); //faz com que retorne apenas um resultado ao inves de um array, ja que e apenas uma ong que esta realizando login.

        if(!ong) {
            return response.status(400).json({error: 'No ONG found with this ID.'})
        }

        return response.json(ong);
    },
}