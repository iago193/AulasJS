const relogio = document.querySelector('.relogio');
const btnTimer = document.querySelector('.buttons-timer');

let segundos  = 0;
let timer;

function getTimeFromSeconds(Seconds) {
    const data = new Date(Seconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

function iniciarRelogios() {
    timer = setInterval( () => {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document,addEventListener('click', (e) =>  {
    const el = e.target;

    /*
    switch (el.classList.value) {
        case 'iniciar':
            clearInterval(timer);
            iniciarRelogios();
            relogio.style.color = '';
            break;
        case 'pausar':
            clearInterval(timer);
            relogio.style.color = 'red';
            break;
        case 'zerar':
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.style.color = '';
            segundos = 0;
            break;
        default:
            break;
    }
    */

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.style.color = '';
        iniciarRelogios();
    } else if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = 'red';
    } else if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.style.color = '';
        segundos = 0;
    }

});