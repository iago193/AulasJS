export function paginaInicial(req, res) {
    res.send(`
        <form action="/" method="post"> 
            <label>Nome:</label>
            <input type="text" name="nome" placeholder="Digite seu nome">
            <button type="submit">Enviar</button>
        </form>
    `);
}

export function tratarPost(req, res) {
    res.send('ei sou sua nova rota de post');
}
