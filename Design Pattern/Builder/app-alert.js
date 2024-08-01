export class AlertBuilder {
    constructor() {
        this.titulo = null;
        this.msg = null;
        this.icon = null;
        this.botoes = [];
        this.callback = null;
    }

    setTitulo(titulo){
        this.titulo = titulo;
        return this;
    }

    setMsg(msg){
        this.msg = msg;
        return this
    }

    setIcon(icon){
        this.icon = icon;
        return this;
    }

    addButton(button){
        this.botoes.push(button);
        return this;
    }

    addCallback(callback) {
        this.callback = callback;
        return this;
    }

    build(){
        return new Alert(this.titulo, this.msg, this.icon, "OK", "Cancelar", this.callback)
    }
}

export class Alert {
    constructor(titulo, msg, icone, txtBotaoAceitar, txtBotaoCancelar, callback){
        this.titulo = titulo;
        this.msg = msg;
        this.icone = icone;
        this.txtBotaoAceitar = txtBotaoAceitar;
        this.txtBotaoCancelar = txtBotaoCancelar;
        this.callback = callback;
    }

    show(){

        const alertBanner = document.querySelector('.alert-banner');
        const iconeElement = alertBanner.querySelector('.alert-icon');
        const tituloElement = alertBanner.querySelector('.alert-titulo');
        const msgElement = alertBanner.querySelector('.alert-msg');
        const botaoAceitar = alertBanner.querySelector('.alert-button');
        const botaoCancelar = alertBanner.querySelector('.alert-button.cancel');

        if (this.icone !== null) {
            iconeElement.src = this.icone;
            iconeElement.style.display = 'block';
        } else {
            iconeElement.style.display = 'none';
        }

        if (this.titulo !== null) {
            tituloElement.textContent = this.titulo;
            tituloElement.style.display = 'block';
        } else {
            tituloElement.style.display = 'none';
        }

        if (this.msg !== null) {
            msgElement.textContent = this.msg;
            msgElement.style.display = 'block';
        } else {
            msgElement.style.display = 'none';
        }

        if (this.txtBotaoAceitar !== null) {
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

        
        alertBanner.style.display = 'inline-block';
    }

}