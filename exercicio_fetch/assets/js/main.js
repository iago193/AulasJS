

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const herf = el.getAttribute('href');

    fetch(herf)
        .then((response) => {
            if(response.status !== 200) throw new Error('Meu erro');
            return response.text();
        })
        .then((html) => {
            carregaResultado(html);
        })
        .catch((e) => {
            console.warn(e);
        });
}

function carregaResultado(response) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = response;
}