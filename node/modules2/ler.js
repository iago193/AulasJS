
import fs from 'fs';

export function exibir(caminhoArquivo) {
    fs.readFile(caminhoArquivo, 'utf8', (e, data) => {
        if (e) {
            console.log('erro ao ler o arquivo', e);
            return
        }

        const pessoasObj = JSON.parse(data);
        const pessoas = pessoasObj;

        console.log(pessoas);
        
        for(let pessoa of pessoas) {
            console.log(pessoa.nome);
        }
    });
}
