function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBtn();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invãlida')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta invãlida')
            }
        },

        clickBtn () {
            document.addEventListener('click', function(e) {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);           
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();          
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();          
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();          
                }

            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia();
