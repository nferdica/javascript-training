const express = require("express"); // Importando express
const app = express(); // Carregando express

//         CRIAR,  LER,  ATUALIZAR, APAGAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST,   GET,  PUT,       DELETE - Métodos express, auxilia na, organização das rotas da aplicação!

// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
});

app.get('/contato', (req, res) => {
    res.send('Contato')
});

app.listen(3000, () => {
    console.log('ACESSAR: http://localhost:3000');
    console.log('PORT: 3000')
});