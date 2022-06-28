const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const logDB = require('../middlewares/logDB')
const { check, validationResult, body } = require('express-validator');

router.get('/logado', usuarioController.viewFormLogin);
router.post('/logado', usuarioController.validarUsuario);

router.get('/user', usuarioController.viewForm);
router.post('/user', logDB, [
    check("nomeUsuario").isLength({min:4}).withMessage("O nome tem que conter no mínimo 4 caracteres!"),
    check("emailUsuario").isEmail().withMessage("O email, tem que ser um email válido!"),
    check("senhaUsuario").isLength({min:5}).withMessage("A senha deve conter no mínimo 5 caracteres!" ) // Usando a dependência express-validator
],usuarioController.salvarUsuario);

module.exports = router;