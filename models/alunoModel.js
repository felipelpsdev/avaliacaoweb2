const alunos = []; // Simula um banco de dados em memória

class Aluno {
  constructor(nome, telefone, email, nota) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.nota = nota;
    this.situacao = this.calcularSituacao();
  }

  calcularSituacao() {
    return this.nota >= 6 ? 'Aprovado' : 'Reprovado';
  }

  static salvar(aluno) {
    alunos.push(aluno);
  }

  static listarTodos() {
    return alunos;
  }
}

export default Aluno;