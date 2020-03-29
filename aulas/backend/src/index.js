/**
 * >> Metodos HTTP
 * 
 * GET:    Buscar/listar uma informacao do back-end;
 * POST:   Criar uma informacao no back-end;
 * PUT:    Alterar uma informacao no back-end;
 * DELETE: Deletar uma informacao no back-end.
 * 
 * ------------------------------------------------------------------------
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
 * 
 * ------------------------------------------------------------------------
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 * Driver: SELECT + FROM users
 * Query Builder: table('users').select('*').where()
 */
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
        aluno: 'João Oliveira'
    })
});
*/
//Imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //diz para o express converter o json em um objeto do JS que seja entendivel pela aplicacao
app.use(routes);         //utiliza as rotas que foram construidas no arquivo ./routes.js.

app.listen(3333);

