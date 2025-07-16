import express from 'express';
import { paginaInicial } from '../controllers/homeController.js';
import { paginaInicialContato } from '../controllers/contatoControllers.js';
import { tratarPost } from '../controllers/homeController.js';

const route = express.Router();

route.get('/', paginaInicial);
route.get('/contato', paginaInicialContato);

route.post('/', tratarPost);

export { route as Router };
