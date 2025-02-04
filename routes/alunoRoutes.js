const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.index);
router.get('/cadastrar', alunoController.cadastrar);
router.post('/salvar', alunoController.salvar);

module.exports = router;