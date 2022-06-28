let express = require('express');
let router = express.Router();
const logDBMiddleware = require('../middlewares/logDB')
let produtoController = require('../controllers/produtoController')

router.get('/criar', produtoController.viewForm);
router.post('/criar', logDBMiddleware, produtoController.salvarForm);
router.get('/sucesso', produtoController.sucesso);

module.exports = router;