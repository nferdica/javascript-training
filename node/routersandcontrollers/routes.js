const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homecontroller')
const contatoController = require('./controllers/contatoController')

// Rotas da home.
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)
route.post('/contato'. contatoController.trataPost)

module.exports = route