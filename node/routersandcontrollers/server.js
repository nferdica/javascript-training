const express = require("express"); // Importando express
const app = express(); // Carregando express
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('ACESSAR: http://localhost:3000');
    console.log('PORT: 3000')
});