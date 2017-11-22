import { IFormCanDeactivate } from './../../guard/iform-candeactivat';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      
        if(this.aluno === null){
          this.aluno = {}
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    console.log("mudou");
    this.formMudou = true;
  }

  podeMudarRota(){
    if (this.formMudou){
      return confirm('tem certeza que deseja sair dessa página?');
    }
   return false;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
