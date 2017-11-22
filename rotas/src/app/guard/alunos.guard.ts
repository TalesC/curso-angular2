import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    constructor(private router: Router){

    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

       // console.log('guarda de rota filha aluno');

        if(state.url.includes('editar')){
          //  alert("Usuario sem acesso");
           // return false;
        }
        
        //this.router.navigate(['/login']);
        //return false;

        return true;
    }


}