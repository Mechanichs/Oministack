const knex = require('knex'); //solicita e cria um objeto knex.
const configuration = require('../../knexfile'); //faz uma requisição (solicita) acesso as informacoes do arquivo knexfile (apenas as que estão sendo exportadas pelo "module.export")e o transforma no objeto configuration

const connection = knex(configuration.development); //cria um objeto knex com as configuracoes do development do arquivo knexfile, que está dentro do objeto configuration aqui neste arquivo

module.exports = connection; //exporta o objeto connection para que possa ser usado em outros arquivos, como se faz com uma biblioteca, por exemplo