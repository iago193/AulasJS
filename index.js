
// Factory functions
const pessoa = {
    nome: 'iago',
    sobreNome: 'bruno',
    idade: '28',
    sexo: 'masculino',
    acaoFalar() {
        return `Olá, meu nome é ${this.nome} ${this.sobreNome}`;
    }
};


// Constructor functions
function Pessoa(nome, sobreNome, idade,) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    this.falar = () => {
        return `olá meu nome e ${this.nome} ${this.sobreNome}`
    }
}
const pessoa1 = new Pessoa('iago', 'bruno', 28);
console.log(pessoa1.falar());







