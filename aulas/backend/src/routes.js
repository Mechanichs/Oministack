//Imports
const express = require('express');                                     //instancia o objeto express.
const SessionController = require('./controllers/SessionController');   //importa as funcoes que estao sendo executadas dentro do arquivo SessionController na pasta controllers.
const OngController = require('./controllers/OngController');           //importa as funcoes que estao sendo executadas dentro do arquivo OngController na pasta controllers.
const IncidentController = require('./controllers/IncidentController'); //importa as funcoes que estao sendo executadas dentro do arquivo IncidentController na pasta controllers.
const ProfileController = require('./controllers/ProfileController');   //importa as funcoes que estao sendo executadas dentro do arquivo ProfileController na pasta controllers.
const routes = express.Router();                                        //instancia o objeto router.


//A rota abaixo cria uma sessao e registra essa sessao no banco de dados
//---------------------------------------------------------------------------------------------------------
routes.post('/sessions', SessionController.create);

//A rota abaixo faz a leitura de todas as ongs cadastradas que estao registradas no banco de dados
//---------------------------------------------------------------------------------------------------------
routes.get('/ongs', OngController.index);

//A rota abaixo pega as informacoes da ong e armazena no banco de dados (o processo se da dentro do objeto OngController)
//---------------------------------------------------------------------------------------------------------
routes.post('/ongs', OngController.xablau);

//A rota abaixo faz a leitura de todos os casos que foram cadastrados por uma determinada ong, e que estao registrados no banco de dados.
//---------------------------------------------------------------------------------------------------------
routes.get('/profile', ProfileController.index);

//A rota abaixo faz a leitura de todos os casos cadastrados que estao registrados no banco de dados
//---------------------------------------------------------------------------------------------------------
routes.get('/incidents', IncidentController.index);

//A rota abaixo pega as informacoes do caso e armazena no banco de dados (o processo se da dentro do objeto IncidentController)
//---------------------------------------------------------------------------------------------------------
routes.post('/incidents', IncidentController.create);

//A rota abaixo deleta um determinado caso. Apenas funciona se o caso pertencer a ong que esta tentando deleta-lo.
//---------------------------------------------------------------------------------------------------------
routes.delete('/incidents/:id', IncidentController.delete); //recebera um "route param" com o id do incident que se quer deletar.



module.exports = routes;