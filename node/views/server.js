const express = require("express"); // Importando express
const app = express(); // Carregando express
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public'))) // Setando caminho dos arquivos estáticos.
app.set('views', path.resolve(__dirname, 'src', 'views')) // Setando caminho da pasta views.
app.set('view engine', 'ejs') // Setando engine...

// Middlewares próprios.
app.use(middlewareGlobal)
app.use(routes)

app.listen(3000, () => {
    console.log('ACESSAR: http://localhost:3000');
    console.log('PORT: 3000')
});