const fs = require('fs');

function logSite(req, res, next) {
    fs.appendFileSync('log.txt', `O usuário acessou a rota: ${req.url}`)
    next();
}

module.exports = logSite