
import path from 'path';
import { fileURLToPath } from 'url';
import { escrever } from './escrever.js';
import { exibir } from './ler.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const pessoas = [
    {nome: 'Iago',sobreNome: 'Bruno',sexo: 'Masculino'},
    {nome: 'Teste',sobreNome: 'Bruno',sexo: 'Masculino'},
    {nome: 'Monica',sobreNome: 'Nunes',sexo: 'Feminino'},
    {nome: 'Maria',sobreNome: 'Alves',sexo: 'Feminino'},
    {nome: 'João',sobreNome: 'Alvares',sexo: 'Masculino'}
];


const json = JSON.stringify(pessoas, null, 2);
const caminhoArquivo = path.resolve(__dirname, 'text.json');

escrever(caminhoArquivo, json);
exibir(caminhoArquivo);