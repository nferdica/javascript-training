import GeraCPF from './modules/Generator';
import './assets/css/style.css';

(function () {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.generateNewCpf()
})();