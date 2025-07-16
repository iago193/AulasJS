import express from 'express';
import { Router } from './routes/routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(Router);

app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
});
