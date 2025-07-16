import express from 'express';
import { Router } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Correção necessária para usar __dirname com ES Modules (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));

// Configurar a pasta de views
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs'); // precisa instalar com: npm install ejs

// Middleware para interpretar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Usar as rotas importadas
app.use(Router);

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
});

