const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator');

let usuarioJson = path.join("usuarios.json");

let usuarioController = {
    viewForm: (req, res) => {
        return res.render('page/cadastrar')
    },
    salvarUsuario: (req, res) => {
        let listaDeErros = validationResult(req);

        if (listaDeErros.isEmpty()) {
            let { nomeUsuario, emailUsuario, senhaUsuario } = req.body;
            let senhaCripto = bcrypt.hashSync(senhaUsuario, 10);
            let usuario = JSON.stringify({ nomeUsuario, emailUsuario, senhaCripto});
            fs.writeFileSync(usuarioJson, usuario)
            console.log(usuario); // Teste
            res.send("Cadastro concluido com sucesso!");
        } else {
            return res.render('page/cadastrar', { errors:listaDeErros.errors })
        }   
    },
    validarUsuario: (req, res) => {
        let { userName, senhaUser } = req.body;

        if ( userName == "betinho123" && senhaUser == "admin123" ) {
            res.send("Você se conectou com sucesso!")
        }
    },
    viewFormLogin: (req, res) => {
        return res.render('page/login')
    }
};

module.exports = usuarioController;