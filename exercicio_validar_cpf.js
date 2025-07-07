cpf = '751.357.090-61';



function validarCpf(cpf) {
    cpf = cpf.replace(/\D+/g, '');

    if (cpf.length !== 11) return false;

    const cpfArray = cpf.split('').map((dig) => {
        return parseInt(dig);
    });

    const calcDigito = (array, fator) => {
        let total = 0;
        for (let i = 0;i < array.length; i++) {
            total += array[i] * fator--;
        }
        const resto = total % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const digito1 = calcDigito(cpfArray.slice(0, 9), 10);
    const digito2 = calcDigito(cpfArray.slice(0, 10), 11);

    return digito1 === cpfArray[9] && digito2 === cpfArray[10];
}

if (validarCpf('751.357.090-61')) {
    console.log('cpf válido');
} else {
    console.log('cpf inválido');
}