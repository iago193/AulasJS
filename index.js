

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosPares = numeros.filter( (valor) => {
    return valor % 2 === 0; //[ 2, 4, 6, 8 ] + [ 4, 8, 12, 16 ] = 40
}).map( (valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador + valor;
});

//console.log(numerosPares);


numeros.forEach((valor) => {
    console.log(`Valores: ${valor}`);
});







