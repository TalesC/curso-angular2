import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guard/alunos.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosComponent } from './cursos/cursos.component';
import { CursosGuard } from './guard/cursos.guard';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
    {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard], canActivateChild: [CursosGuard] },
    {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    //},
    //{path: 'cursos', component: CursosComponent },
    //{path: 'curso/:id', component: CursoDetalheComponent },
    {path: 'login', component: LoginComponent },
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home' , pathMatch: 'full'},
    {path: '**', component: PaginaNaoEncontradaComponent}//, canActivate: [AuthGuard]}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}