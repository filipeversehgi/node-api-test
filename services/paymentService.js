var bookshelf = require('../config/bookshelf');
var Payment = require('../models/Payment');

module.exports = {
    create: (data) => {
        const payment = new Payment(data);
        payment.save().then((data) => {
            console.dir(data);
            return(data.attributes);
        });
    }
}