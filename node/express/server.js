import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true })); //tratar o post

app.get('/', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    res.send(`
        <form action="/" method="post">
            NOME:<input type="text" name="nome">
            <button> Enviar </button>
        </form>`);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('recebir');
});

app.get('/teste/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    res.send(req.params.id);
});

app.listen(3000, () => {
        console.log('Servidor rodando na porta: 3000');
});

//exemplo: http://localhost:3000/teste/12345/?nome=iago&sobrenome=bruno&idade=28