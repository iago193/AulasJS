export function paginaInicial(req, res) {
    res.render('index');
}

export function tratarPost(req, res) {
    res.send('ei sou sua nova rota de post');
}
