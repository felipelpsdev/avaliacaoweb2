import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/aluno', alunoRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});