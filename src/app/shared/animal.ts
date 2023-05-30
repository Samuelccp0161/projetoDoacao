export class Animal {
  id: number;
  nome = '';
  telefone = '';
  descricao = '';

  constructor(id: number, nome: string, telefone: string, descricao: string) {
    this.id = id
    this.nome = nome
    this.telefone = telefone
    this.descricao = descricao
  }
}
