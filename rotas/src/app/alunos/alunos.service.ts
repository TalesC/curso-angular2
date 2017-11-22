import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Alunos 01', email: 'alunos01@email.com'},
    {id: 2, nome: 'Alunos 02', email: 'alunos02@email.com'},
    {id: 3, nome: 'Alunos 03', email: 'alunos03@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let aluno of this.alunos){
     if(aluno.id == id)
      return aluno;
    }
    return null;
  }

  constructor() { }

}
