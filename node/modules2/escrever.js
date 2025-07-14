import fs from 'fs';

export function escrever(caminhoArquivo, json) {
    fs.writeFile(caminhoArquivo, json, (error) => {
        if (error) {
            console.error('Erro ao escrever o arquivo:', error);
        } else {
            console.log('Arquivo criado com sucesso!');
        }
    });
}

