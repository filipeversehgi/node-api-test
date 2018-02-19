var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'node_payfast',
        charset: 'utf8'
    }
});
module.exports = require('bookshelf')(knex);