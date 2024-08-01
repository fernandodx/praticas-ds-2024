// Código antes de usar o padrao observer 

class AgendaOnline {
    constructor() {
        this.comunicados = [];
        this.paisEmails = ["pai1@example.com", "pai2@example.com", "pai3@example.com"];
    }

    adicionarComunicado(comunicado) {
        this.comunicados.push(comunicado);
        this.notificarPais(comunicado);
    }

    notificarPais(comunicado) {
        this.paisEmails.forEach(email => {
            console.log(`Enviando comunicado para ${email}: ${comunicado}`);
        });
    }
}

const agenda = new AgendaOnline();
agenda.adicionarComunicado("Reunião de pais na próxima sexta-feira às 14h.");

// Código utilizando o design pattern Observer

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(comunicado) {
        this.observers.forEach(observer => observer.update(comunicado));
    }
}

class AgendaOnline extends Subject {
    constructor() {
        super();
        this.comunicados = [];
    }

    adicionarComunicado(comunicado) {
        this.comunicados.push(comunicado);
        this.notifyObservers(comunicado);
    }
}

class Pai {
    constructor(email) {
        this.email = email;
    }

    update(comunicado) {
        console.log(`Enviando comunicado para ${this.email}: ${comunicado}`);
    }
}

// Uso
const agenda = new AgendaOnline();
const pai1 = new Pai("pai1@example.com");
const pai2 = new Pai("pai2@example.com");
const pai3 = new Pai("pai3@example.com");

agenda.addObserver(pai1);
agenda.addObserver(pai2);
agenda.addObserver(pai3);

agenda.adicionarComunicado("Reunião de pais na próxima sexta-feira às 14h.");
