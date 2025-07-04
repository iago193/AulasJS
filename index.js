

// pessoa = {
//     nome: "João",
//     idade: 30,
//     profissao: "Engenheiro"
// };

pessoa = (nome, idade, peso) => {
    nome = nome;
    idade = idade;
    peso = peso;
    falar = () => {
        console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e peso ${peso} kg.`);
    }
}

pessoa.falar();


