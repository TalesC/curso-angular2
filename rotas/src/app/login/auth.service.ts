import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAtenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@gmail.com' &&
     usuario.senha === '123456' ){
      this.usuarioAtenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else{
      this.usuarioAtenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAtenticado;
  }

}
