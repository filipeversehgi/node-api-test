var bookshelf = require('../config/bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'payments'
});