exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method='POST'>
        Nome do cliente: <input type="text"><br>
        <button>Submit</button>
        </form>
        `) 
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST!')
}