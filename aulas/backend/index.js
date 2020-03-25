const express = require('express');

const app = express();


/**
 * >> Metodos HTTP
 * 
 * GET:    Buscar/listar uma informacao do back-end;
 * POST:   Criar uma informacao no back-end;
 * PUT:    Alterar uma informacao no back-end;
 * DELETE: Deletar uma informacao no back-end.
 * 
 * >> Tipos de Parametros
 * 
 * Query Params: 
 *      Parametros nomeados/enviados na rota apos "?", 
 *      utiliza-se ainda o "&" (Filtros, paginacao).
 * Route Params:
 *      Parametros utilizados para identificar recursos ":id".
 * Request Body:
 *      Corpo da requisicao, utilizado para criar ou alterar
 *      recursos.
 */

app.use(express.json()); //diz para o express onverter o json em um objeto do JS que seja entendivel pela aplicacao

 /*
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OminiStack 11.0',     //Exemplo de GET
        aluno: 'João Vítor'
    })
});
*/
/*
app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana OminiStack 11.0',     //Exemplo de POST
        aluno: 'João Vítor'
    })
});
*/
/*
app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OminiStack 11.0',     //Exemplo de Query
        aluno: 'João Vítor'
    })
});
*/

/*
app.get('/users/:id', (request, response) => {
    const params = request.params;
    
    console.log(params);
    
    return response.json({
        evento: 'Semana OminiStack 11.0',      //Exemplo de utilização parametro Route
        aluno: 'João Vítor'
    })
});
*/
/*
app.post('/users', (request, response) => {
    const body = request.body;
    
    console.log(body);

    return response.json({
        evento: 'Semana OminiStack 11.0',      //Exemplo de utilização parametro Body
        aluno: 'João Vítor'
    })
});
*/

app.listen(3333);