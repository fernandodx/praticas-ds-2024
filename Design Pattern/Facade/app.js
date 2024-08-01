class GereciamentoUsuario {
    adicionarUsuario(usuario) {
        console.log(`Usuario Add ${usuario.nome}`)
    }
    obterUsuario(usuarioId) {
        return { id : usuarioId, nome : "Fulano"};
    }
}

class GerenciamentoLivros {
    adicionarLivro(livro){
        console.log(`livro ${livro.titulo} adicionado!`)
    }

    obterLivro(livroId){
        return { id : livroId , titulo : "Livro Legal"}
    }

    livroDisponivel(livroId) {
        return true;
    }
}

class GerencimentoEmprestimos {
    
    emprestarLivro(usuarioId, livroId) {
        console.log(`Livro ${livroId} Emprestado para ${usuarioId}`);
    }

    devolverLivro(usuarioId, livroId) {
        console.log(`Livro ${livroId} devolvido com sucesso pelo ${usuarioId}`);
    }
}

class Sistema1 {
    emprestarLivro(usuarioId, livroId) {
        const gerenciamentoUsuario = new GereciamentoUsuario();
        const gerenciamentoLivro = new GerenciamentoLivros();
        const gerenciamentoEmprestimo = new GerencimentoEmprestimos();
        
        const usuario = gerenciamentoUsuario.obterUsuario(usuarioId);
        const livro = gerenciamentoLivro.obterLivro(livroId);

        if(gerenciamentoLivro.livroDisponivel(livroId)){
            gerenciamentoEmprestimo.emprestarLivro(usuarioId, livroId);
        }else{
            console.log(`Livro ${livroId} não disponível.`)
        }
    }
}

const sistema1 = new Sistema1();
sistema1.emprestarLivro(1,101);


//COM FACADE

class BibliotecaFacade{

    constructor(){
        this.gerenciamentoUsuario = new GereciamentoUsuario(),
        this.gerenciamentoLivro = new GerenciamentoLivros(),
        this.gerenciamentoEmprestimo = new GerencimentoEmprestimos()
    }

    emprestarLivro(usuarioId, livroId) {
        const usuario = this.gerenciamentoUsuario.obterUsuario(usuarioId);
        const livro = this.gerenciamentoLivro.obterLivro(livroId);

        if(this.gerenciamentoLivro.livroDisponivel(livroId)){
            this.gerenciamentoEmprestimo.emprestarLivro(usuarioId, livroId);
        }else{
            console.log(`Livro ${livroId} não disponível.`)
        }
    }

    devolverLivro(usuarioId, livroId){
        console.log(`Livro ${livroId} devolvido. Obrigado usuário ${usuarioId}`);
    }
}

const biblioteca = new BibliotecaFacade();
biblioteca.emprestarLivro(2,202);