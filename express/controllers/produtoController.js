let produtoController = {
    viewForm: (req, res) => {
        return res.render('page/produto')
    },
    salvarForm:(req, res) => {
        let { nomeProduto, precoProduto} = req.body;
        // Salvar as informações no banco
        res.redirect('/produto/sucesso');
    },
    sucesso: (req, res) => {
        res.render('page/sucesso');
    }
}

module.exports = produtoController;