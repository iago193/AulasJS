// import HomeModel from "../model/homeModel.js";

// HomeModel.create({   //HomeModel.find() para buscar dados
//     titulo: 'Um teste',
//     descricao: 'Descrição'
// }).then((dados) => {
//     console.log(dados);
// }).catch((e) => {
//     console.log(e);
// });

export function paginaInicial(req, res) {
    res.render('index');
}

export function tratarPost(req, res) {
    res.send('ei sou sua nova rota de post');
}
