import express from 'express';
import { Router } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {middleware} from './src/middleware/middleware.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));

app.use(middleware);

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs'); // precisa instalar com: npm install ejs

app.use(express.urlencoded({ extended: true }));

app.use(Router);

app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
});

