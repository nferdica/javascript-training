/*

fetch('pessoas.json') // Buscando arquivos pessoas.json com fetch
.then(resposta => resposta.json())
.then(json => carregaElements(json))

*/

axios('pessoas.json') // Ultilizando CDN Axios, simplificando o processos
.then(resposta => carregaElements(resposta.data));

function carregaElements(json) {
    const table = document.createElement('table')
    
    for(let pessoa of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}