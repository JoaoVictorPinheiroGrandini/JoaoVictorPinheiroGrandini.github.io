// 1. Classe Pessoa e Herança
class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.sexo}.`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, sexo, matricula, curso) {
        super(nome, idade, sexo);
        this.matricula = matricula;
        this.curso = curso;
    }

    apresentar() {
        return `${super.apresentar()} Estou matriculado no curso de ${this.curso}.`;
    }
}

const aluno1 = new Aluno("João", 25, "homem", 12345, "Engenharia");
console.log(aluno1.apresentar());

// 2. Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    mostrarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limite) {
        super(titular, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
        } else {
            console.log("Saldo e limite insuficientes.");
        }
    }
}

// 3. Sistema de Gerenciamento de Produtos
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    atualizarEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
    }

    calcularValorEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, preco, quantidadeEmEstoque, dataDeValidade) {
        super(nome, preco, quantidadeEmEstoque);
        this.dataDeValidade = dataDeValidade;
    }

    verificarValidade(dataAtual) {
        return new Date(dataAtual) <= new Date(this.dataDeValidade);
    }
}

// 4. Classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    descrever() {
        return `${super.descrever()}, Portas: ${this.portas}`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    descrever() {
        return `${super.descrever()}, Cilindradas: ${this.cilindradas}`;
    }
}

// 5. Classe de Gerenciamento de Funcionários
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    aumentarSalario(percentual) {
        this.salario += (this.salario * percentual) / 100;
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario}, Departamento: ${this.departamento}`);
    }
}

class Estagiario extends Funcionario {
    aumentarSalario(percentual) {
        if (percentual > 10) {
            console.log("Aumento não permitido.");
        } else {
            super.aumentarSalario(percentual);
        }
    }
}

// 6. Sistema de Biblioteca
class Livro {
    constructor(titulo, autor, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
        } else {
            console.log("Livro já emprestado.");
        }
    }

    devolver() {
        this.disponivel = true;
    }

    status() {
        console.log(`Título: ${this.titulo}, Disponível: ${this.disponivel ? "Sim" : "Não"}`);
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }

    buscarLivro(titulo) {
        return this.livros.find(livro => livro.titulo === titulo);
    }
}

// 7. Classe Jogador para Jogos Online
class Jogador {
    constructor(nome, nivel = 1, experiencia = 0) {
        this.nome = nome;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }

    ganharExperiencia(pontos) {
        this.experiencia += pontos;
        if (this.experiencia >= 100) {
            this.subirDeNivel();
        }
    }

    subirDeNivel() {
        this.nivel++;
        this.experiencia = 0;
    }
}

class Guerreiro extends Jogador {
    constructor(nome, nivel, experiencia, forca) {
        super(nome, nivel, experiencia);
        this.forca = forca;
    }

    subirDeNivel() {
        super.subirDeNivel();
        this.forca += 10;
    }
}

// 8. Classe Turma e Alunos
class Turma {
    constructor(curso) {
        this.curso = curso;
        this.alunos = [];
    }

    adicionarAluno(nome) {
        this.alunos.push(nome);
    }

    removerAluno(nome) {
        this.alunos = this.alunos.filter(aluno => aluno !== nome);
    }

    listarAlunos() {
        return this.alunos;
    }
}

class TurmaOnline extends Turma {
    constructor(curso, linkDeAcesso) {
        super(curso);
        this.linkDeAcesso = linkDeAcesso;
    }

    listarAlunos() {
        return `${super.listarAlunos()} - Acesse em: ${this.linkDeAcesso}`;
    }
}

// 9. Classe para Gerenciar Tarefas
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarConcluida() {
        this.concluida = true;
    }

    descrever() {
        return `Tarefa: ${this.descricao}, Concluída: ${this.concluida}`;
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    listarTarefasConcluidas() {
        return this.tarefas.filter(tarefa => tarefa.concluida);
    }
}

// 10. Classe para Controle de Estacionamento
class Carro {
    constructor(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }

    descrever() {
        return `Placa: ${this.placa}, Modelo: ${this.modelo}`;
    }
}

class Estacionamento {
    constructor(vagasTotais) {
        this.vagasTotais = vagasTotais;
        this.carros = [];
    }

    adicionarCarro(carro) {
        if (this.carros.length < this.vagasTotais) {
            this.carros.push(carro);
        } else {
            console.log("Estacionamento lotado.");
        }
    }

    removerCarro(placa) {
        this.carros = this.carros.filter(carro => carro.placa !== placa);
    }

    listarCarros() {
        return this.carros.map(carro => carro.descrever());
    }
}
