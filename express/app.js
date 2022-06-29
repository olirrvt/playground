const express = require("express");
const app = express();
const port = 1001;
const logMiddleware = require("./middlewares/logSite");
const indexController = require("./controllers/indexControllers");
const usuariosRouter = require("./routes/usuarios");
const produtosRouter = require("./routes/produtos");
const usuarioController = require("./controllers/usuarioController");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurando os Middlewares

app.use(logMiddleware);

// Configuração padrão do EJS

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

// Rotas do EJS

app.get('/', (request, response) => {
    response.render("index")
})

app.get('/produto', (request, response) => {
    response.render("page/produto")
})

app.get('/cadastrar', (request, response) => {
    response.render("page/cadastrar")
})

app.get('/login', (request, response) => {
    response.render("page/login")
})

// METODO GET

app.get("/", function(req, res, next) {
    res.render('index', { title: 'Express' })
});

app.get("/login", usuarioController.validarUsuario);
app.get("/cadastrar", usuarioController.salvarUsuario);

app.get("/contato", indexController.viewContato);
app.get("/confirmarcontato", indexController.confirmarContato)

app.use('/login', usuariosRouter)
app.use('/cadastrar', usuariosRouter)
app.use('/produto', produtosRouter);

// Especificando a porta

app.listen(port, () => {
    console.log(`Serviço rodando na porta: ${port}`)
})