import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CursosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        console.log('guarda de rota filha cursos');

        return true;
        
    }


}