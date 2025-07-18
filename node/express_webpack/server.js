import dotenv from 'dotenv';
import express from 'express';
import { Router } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { middleware } from './src/middleware/middleware.js';
import { MongoClient } from 'mongodb';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MongoDB URL
const mongoUrl = process.env.connectDb;
const client = new MongoClient(mongoUrl);

// Envolve tudo em uma função assíncrona
(async () => {
  try {
    await client.connect(); //tambem pode usar o .then/catch
    console.log('✅ Conectado ao MongoDB');

    const app = express();

    app.use(express.static(path.join(__dirname, './public')));
    app.use(middleware);

    app.set('views', path.join(__dirname, './src/views'));
    app.set('view engine', 'ejs');

    app.use(express.urlencoded({ extended: true }));

    // Você pode passar o banco para o middleware/rotas se quiser
    app.use((req, res, next) => {
      req.db = client.db('nome-do-seu-banco'); // opcional
      next();
    });

    app.use(Router);

    app.listen(3000, () => {
      console.log('🚀 Servidor rodando na porta: 3000');
    });

  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo, evitando que o servidor rode
  }
})();





/*
import express from 'express';
import { Router } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { middleware } from './src/middleware/middleware.js';
import { MongoClient } from 'mongodb';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MongoDB - Conexão
const mongoUrl = 'mongodb+srv://iagodb:iago1996@cluster0.lfcmuop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // substitua pelo seu
const client = new MongoClient(mongoUrl);

try {
  await client.connect(); // conectar com await
  console.log('✅ Conectado ao MongoDB');
  // Você pode passar o `db` para o middleware, rotas, etc, se quiser.
} catch (error) {
  console.error('❌ Erro ao conectar ao MongoDB:', error);
}

app.use(express.static(path.join(__dirname, './public')));

app.use(middleware);

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(Router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta: 3000');
});

*/
