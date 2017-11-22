import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, CanDeactivate } from '@angular/router';
import { AlunosDeactivateGuard } from './../guard/alunos-deactivate.guard';
import { AlunosGuard } from './../guard/alunos.guard';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes =[
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard] , children : [
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component: AlunosDetalheComponent,
        resolve:{ aluno : AlunoDetalheResolver }
    },
    {path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard]} ,
  ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AlunosRoutingModule { }
