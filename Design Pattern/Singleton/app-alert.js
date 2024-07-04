export class AlertBuilder {
  constructor() {
      this.titulo = "";
      this.msg = "";
      this.icon = "";
      this.buttons = [];
      this.callback = null;
  }

  settitulo(titulo) {
      this.titulo = titulo;
      return this;
  }

  setmsg(msg) {
      this.msg = msg;
      return this;
  }

  setIcon(icon) {
      this.icon = icon;
      return this;
  }

  addButton(button) {
      this.buttons.push(button);
      return this;
  }

  addCallback(callback) {
    this.callback = callback;
    return this;
  }

  build() {
      return new Alert(this.titulo, this.msg, this.icon, "ok", "cancelar", this.callback);
  }
}

export class Alert {
    constructor(titulo, msg, icone, txtBotaoAceitar, textoBotaoCancelar, callback) {
        this.titulo = titulo;
        this.msg = msg;
        this.icone = icone;
        this.txtBotaoAceitar = txtBotaoAceitar;
        this.textoBotaoCancelar = textoBotaoCancelar;
        this.callback = callback;
    }

    show() {

        const alertBanner = document.querySelector('.alert-banner');

        if (this.icone !== null) {
            const iconeElement = alertBanner.querySelector('.alert-icon');
            iconeElement.src = this.icone;
            iconeElement.style.display = 'block';
        } else {
            iconeElement.style.display = 'none';
        }

        if (this.titulo !== null) {
            const tituloElement = alertBanner.querySelector('.alert-titulo');
            tituloElement.textContent = this.titulo;
            tituloElement.style.display = 'block';
        } else {
            tituloElement.style.display = 'none';
        }

        if (this.msg !== null) {
            const msgElement = alertBanner.querySelector('.alert-msg');
            msgElement.textContent = this.msg;
            msgElement.style.display = 'block';
        } else {
            msgElement.style.display = 'none';
        }

        if (this.txtBotaoAceitar !== null) {
            const botaoAceitar = alertBanner.querySelector('.alert-button');
            botaoAceitar.textContent = this.txtBotaoAceitar;
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

        if (this.textoBotaoCancelar !== null) {
            const botaoCancelar = alertBanner.querySelector('.alert-button.cancel');
            botaoCancelar.textContent = this.textoBotaoCancelar;
            botaoCancelar.style.display = 'inline-block';
            botaoCancelar.addEventListener('click', () => {
                alertBanner.style.display = 'none';
            });
        } else {
            botaoCancelar.style.display = 'none';
        }
        alertBanner.style.display = 'inline-block';
    }
}

