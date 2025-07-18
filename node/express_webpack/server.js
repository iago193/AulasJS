import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { middleware } from './src/middleware/middleware.js';
import { Router } from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('✅ Conectado ao MongoDB com Mongoose');

  app.use(express.static(path.join(__dirname, './public')));
  app.use(middleware);

  app.set('views', path.join(__dirname, './src/views'));
  app.set('view engine', 'ejs');

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(Router);

  app.listen(3000, () => {
    console.log('🚀 Servidor rodando na porta 3000');
  });

}).catch((err) => {
  console.error('❌ Erro ao conectar ao MongoDB:', err);
  process.exit(1);
});
