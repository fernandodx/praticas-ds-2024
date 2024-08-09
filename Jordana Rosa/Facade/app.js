class GereciamentoUsuario {
    adicionarUsuario(usuario) {
        console.log(`Usuário ${usuario.nome} adicionado`);
    }

    obterUsuario(usuarioId) {
        return { id: usuarioId, nome: "Fulano" };
    }
}

class GerenciamentoLivros {
    adicionarLivro(livro) {
        console.log(`Livro ${livro.titulo} adicionado!`);
    }

    obterLivro(livroId) {
        return { id: livroId, titulo: "Livro Legal" };
    }

    livroDisponivel(livroId) {
        return true; // Para simplicidade, sempre retorna true
    }
}

class GerencimentoEmprestimos {
    emprestarLivro(usuarioId, livroId) {
        console.log(`Livro ${livroId} emprestado para ${usuarioId}`);
    }

    devolverLivro(usuarioId, livroId) {
        console.log(`Livro ${livroId} devolvido com sucesso pelo ${usuarioId}`);
    }
}

class BibliotecaFacade {
    constructor() {
        this.gerenciamentoUsuario = new GereciamentoUsuario();
        this.gerenciamentoLivro = new GerenciamentoLivros();
        this.gerenciamentoEmprestimo = new GerencimentoEmprestimos();
    }

    emprestarLivro(usuarioId, livroId) {
        const usuario = this.gerenciamentoUsuario.obterUsuario(usuarioId);
        const livro = this.gerenciamentoLivro.obterLivro(livroId);

        if (this.gerenciamentoLivro.livroDisponivel(livroId)) {
            this.gerenciamentoEmprestimo.emprestarLivro(usuario.nome, livro.titulo);
        } else {
            console.log(`Livro ${livroId} não disponível.`);
        }
    }

    devolverLivro(usuarioId, livroId) {
        this.gerenciamentoEmprestimo.devolverLivro(usuarioId, livroId);
    }
}

// Exemplo de uso
const biblioteca = new BibliotecaFacade();
document.getElementById('emprestarButton').addEventListener('click', () => {
    biblioteca.emprestarLivro(1, 101); // Exemplo de empréstimo
});

document.getElementById('devolverButton').addEventListener('click', () => {
    biblioteca.devolverLivro(1, 101); // Exemplo de devolução
});
