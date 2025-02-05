import express from 'express';
import alunoController from '../controllers/alunoController.js';

const router = express.Router();

router.get('/', alunoController.index);
router.get('/cadastrar', alunoController.cadastrar);
router.post('/salvar', alunoController.salvar);

export default router;