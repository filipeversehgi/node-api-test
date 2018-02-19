var service = require('../services/paymentService');

module.exports = (app) => {
    app.get('/pagamentos', (req, res) => {
        console.log('Recebida requisição de teste');
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        const pagamento = req.body;
        console.log('Processando uma requisição de um novo pagamento');
        
        pagamento.status = 'CRIADO';
        pagamento.created_at = (new Date).toString();

        const result = service.create(pagamento);
        console.log(result);
        res.status(200).json(result);
    });
}