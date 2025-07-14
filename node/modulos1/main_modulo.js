export const nome = ['iago', 'bruno', 'Monica', 'silva'];



export class Calcular {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calculo = () => {
        return this.x * this.y;
    }
}

//console.log(nome[3]);
//exports.nome = nome