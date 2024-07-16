function Calculator () {
    
        this.display = document.querySelector('.display');

        this.inicia = function() {
            this.clickBtn();
            this.pressEnter();
        };

        this.pressEnter = function () {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };

        this.clearDisplay = function () {
            this.display.value = '';
        };

        this.deleteOne = function () {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.realizaConta = function () {
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
        };

        this.clickBtn = function () {
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
        };

        this.btnParaDisplay = function (valor) {
            this.display.value += valor;
        };
    };


const calculadora = new Calculator()
calculadora.inicia();
