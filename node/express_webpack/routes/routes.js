import express from 'express';
import { paginaInicial } from '../src/controllers/homeController.js';
import { paginaInicialContato } from '../src/controllers/contatoControllers.js';
import { tratarPost } from '../src/controllers/homeController.js';

const route = express.Router();

route.get('/', paginaInicial);
route.get('/contato', paginaInicialContato);

route.post('/', tratarPost);

export { route as Router };
