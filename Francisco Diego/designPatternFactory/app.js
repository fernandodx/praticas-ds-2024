//Criando uma classe

class Carro {
    constructor (name) {
        this.name = name
    }

    getName () {
        return this.name
    }
}

const meuCarro = new Carro('Ferrari')
console.log(meuCarro.getName())

//Criando uma Factory Pattern que substitui a classe

//Criando uma constante que recebe uma função que retorna
//um novo objeto com uma propriedade que recebe um valor
const createCarro = name => ({
    name,
//declaração do metódo getName que recebe uma Arrow Function 
//que retorna o valor que o parametro name recebeu
    getName: () => name
})

//Obtendo um novo objeto através da factory function
const meuCarro2 = createCarro('Ferrari')
//exibindo no console
console.log(meuCarro2.getName())