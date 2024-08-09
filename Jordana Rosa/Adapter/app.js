// Resumo
// Aplicabilidade:
// Use o Adapter quando precisar usar uma classe existente cuja interface é incompatível com o restante do seu código.
// O padrão Adapter permite criar uma classe intermediária que atua como tradutor entre seu código e uma classe legada, de terceiros ou qualquer outra classe com uma interface diferente.
// O padrão é útil para reutilizar subclasses existentes que não possuem funcionalidades comuns que não podem ser adicionadas à superclasse, evitando a duplicação de código.
// Implementação:
// 1. Certifique-se de que há pelo menos duas classes com interfaces incompatíveis.
// 2. Declare a interface do cliente e descreva como os clientes se comunicam com o serviço.
// 3. Crie a classe Adapter e faça-a seguir a interface do cliente.
// 4. Adicione um campo à classe Adapter para armazenar a referência ao objeto de serviço.
// 5. Implemente todos os métodos da interface do cliente na classe Adapter.
// Prós:
// - Princípio da Responsabilidade Única: separa a conversão de interface ou dados da lógica de negócios.
// - Princípio Aberto/Fechado: permite introduzir novos tipos de adapters sem quebrar o código do cliente.
// Contras:
// - A complexidade do código aumenta devido à introdução de novas interfaces e classes.



// Classe Antiga
class GerenciamentoEstudantes {
    obterEstudantes() {
        return ["Alice", "Bob", "Carlos", "Fernando"];
    }
}

function exibirNomesEstudantes(gerenciador) {
    const estudantes = gerenciador.obterEstudantes();
    const outputDiv = document.createElement('div');

    estudantes.forEach(estudante => {
        const estudanteP = document.createElement('p');
        estudanteP.textContent = "Estudante: " + estudante;
        outputDiv.appendChild(estudanteP);
    });

    document.body.appendChild(outputDiv);
}

// Nova Classe com Interface Diferente
class GerenciadorEstudanteAvancado {
    obterListaEstudantesAvancado() {
        return [
            { nome: "Alice", idade: 20 },
            { nome: "Bob", idade: 22 },
            { nome: "Carlos", idade: 40 },
            { nome: "Fernando", idade: 36 }
        ];
    }
}

// Adapter para a Nova Classe
class GerenciadoEstudanteAdapter {
    constructor(gerenciadorEstudanteAvancado) {
        this.gerenciadorEstudanteAvancado = gerenciadorEstudanteAvancado;
    }

    obterEstudantes() {
        return this.gerenciadorEstudanteAvancado
            .obterListaEstudantesAvancado()
            .map(estudante => estudante.nome);
    }
}

// Usando o Adapter
window.onload = function() {
    const gerenciadorAvancado = new GerenciadorEstudanteAvancado();
    const adapter = new GerenciadoEstudanteAdapter(gerenciadorAvancado);
    exibirNomesEstudantes(adapter);
}
