let indexController = {
    viewContato: (req, res) => {
        let { nome, idade } = req.query 
        res.render('page/contato', {nomeUsuario:nome});
    },
    confirmarContato: (req, res) => {
        let { nome, email } = req.query;
        res.send(`Recebido com sucesso as informações! Seja bem vindo, ${nome}!`) // Gerar uma query com dados enviados (isso é só um EXEMPLO. NÃO É RECOMENDADO FAZER ISSO!)
    }
}

module.exports = indexController