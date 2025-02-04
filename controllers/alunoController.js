const Aluno = require('../models/alunoModel');

const alunoController = {
  index: (req, res) => {
    const alunos = Aluno.listarTodos();
    res.render('alunos/index', { alunos });
  },

  cadastrar: (req, res) => {
    res.render('alunos/cadastrar');
  },

  salvar: (req, res) => {
    const { nome, telefone, email, nota } = req.body;
    const aluno = new Aluno(nome, telefone, email, parseFloat(nota));
    Aluno.salvar(aluno);
    res.redirect('/aluno');
  },
};

module.exports = alunoController;