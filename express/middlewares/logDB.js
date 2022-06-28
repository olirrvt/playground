const fs = require('fs');

function logDB(req, res, next) {
    fs.appendFileSync('log(DB).txt', `O usuário criou um registro na URL: ${req.url}`)
    next();
}

module.exports = logDB;