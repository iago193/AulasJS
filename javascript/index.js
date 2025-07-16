
function rand(max, min) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * max - min + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') return reject('Error: não passou');

        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });
}

async function executar() {
    try {
        const frase1 = await esperaAi('Frase 1', rand(1, 3));
        console.log(frase1);

        const frase2 = await esperaAi('Frase 2', rand(1, 3));
        console.log(frase2);

        const frase3 = await esperaAi('Frase 3', rand(1, 3));
        console.log(frase3);

        const frase4 = await esperaAi('Frase 4', rand(1, 3));
        console.log(frase4);
    } catch (e) {
        console.log(e);
    }
}


executar();




