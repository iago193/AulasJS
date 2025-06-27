

function mostrarHoraAtual() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false,
    })
}

console.log(mostrarHoraAtual());