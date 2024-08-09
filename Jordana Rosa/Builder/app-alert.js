export class Alert {
    constructor(titulo, msg, icone, btnAceitar, btnCancelar, callback) {
        this.titulo = titulo;
        this.msg = msg;
        this.icone = icone;
        this.btnAceitar = btnAceitar;
        this.btnCancelar = btnCancelar;
        this.callback = callback;
    }

    show() {
        const alertBanner = document.querySelector('.alert-banner');
        const iconeElement = alertBanner.querySelector('.alert-icon');
        const tituloElement = alertBanner.querySelector('.alert-titulo');
        const msgElement = alertBanner.querySelector('.alert-msg');
        const botaoAceitar = alertBanner.querySelector('.alert-button');
        const botaoCancelar = alertBanner.querySelector('.alert-button.cancel');

        // Configura ícone
        if (this.icone !== null) {
            iconeElement.src = this.icone;
            iconeElement.style.display = 'block';
        } else {
            iconeElement.style.display = 'none';
        }

        // Configura título
        if (this.titulo !== null) {
            tituloElement.textContent = this.titulo;
            tituloElement.style.display = 'block';
        } else {
            tituloElement.style.display = 'none';
        }

        // Configura mensagem
        if (this.msg !== null) {
            msgElement.textContent = this.msg;
            msgElement.style.display = 'block';
        } else {
            msgElement.style.display = 'none';
        }

        // Configura botão de aceitar
        if (this.btnAceitar !== null) {
            botaoAceitar.textContent = this.btnAceitar;
            botaoAceitar.style.display = 'inline-block';
            botaoAceitar.addEventListener('click', () => {
                if (typeof this.callback === 'function') {
                    this.callback();
                }
                alertBanner.style.display = 'none';
            });
        } else {
            botaoAceitar.style.display = 'none';
        }

        // Configura botão de cancelar
        if (this.btnCancelar !== null) {
            botaoCancelar.textContent = this.btnCancelar;
            botaoCancelar.style.display = 'inline-block';
            botaoCancelar.addEventListener('click', () => {
                alertBanner.style.display = 'none';
            });
        } else {
            botaoCancelar.style.display = 'none';
        }

        // Exibe o alerta
        alertBanner.style.display = 'flex';
    }
}

export class AlertBuilder {
    constructor() {
        this.titulo = null;
        this.msg = null;
        this.icone = null;
        this.btnAceitar = null;
        this.btnCancelar = null;
        this.callback = null;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
        return this;
    }

    setMensagem(msg) {
        this.msg = msg;
        return this;
    }

    setIcone(icone) {
        this.icone = icone;
        return this;
    }

    addButtonAceitar(txt) {
        this.btnAceitar = txt;
        return this;
    }

    addButtonCancelar(txt) {
        this.btnCancelar = txt;
        return this;
    }

    addCallback(callback) {
        this.callback = callback;
        return this;
    }

    build() {
        return new Alert(
            this.titulo,
            this.msg,
            this.icone,
            this.btnAceitar,
            this.btnCancelar,
            this.callback
        );
    }
}
