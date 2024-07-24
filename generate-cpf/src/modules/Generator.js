import Validator from "./Validator";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formated (cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' + cpf.slice(9, 11)
        )
    }

    generateNewCpf() {
        const cpfNotChar = this.rand();
        const charOne = Validator.criaChar(cpfNotChar)
        const charTwo = Validator.criaChar(cpfNotChar + charOne)
        const newCpf = cpfNotChar + charOne + charTwo
        return this.formated(newCpf);
    }
}