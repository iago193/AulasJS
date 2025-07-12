const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body).backgroundColor;
//const backgroundColorBody = estilosBody.backgroundColor;

for (let i of ps) {
    i.style.backgroundColor = estilosBody;
    i.style.color = 'black';
    i.style.padding = '10px';
    i.style.margin = '10px';
    i.style.borderRadius = '5px';
    i.style.fontSize = '1.2em';
}