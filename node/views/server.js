require('dotenv').config();

const express = require("express"); // Importando express
const app = express(); // Carregando express

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('online')
        console.log('BANCO DE DADOS: Online')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public'))) // Setando caminho dos arquivos estáticos.

const sessionOptions = session({
    secret: 'qwer qwer qwer',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
})
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views')) // Setando caminho da pasta views.
app.set('view engine', 'ejs') // Setando engine...

// Middlewares próprios.
app.use(middlewareGlobal)
app.use(routes)

app.on('online', () => {
    app.listen(3000, () => {
        console.log('ACESSAR: http://localhost:3000');
        console.log('PORT: 3000')
    });
})
