import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs/RX';
import { AlunosFormComponent } from './../alunos/alunos-form/alunos-form.component';
import { IFormCanDeactivate } from './iform-candeactivat';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{

    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot 
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("guarda de desativação");
        //return component.podeMudarRota();
        return component.podeDesativar();        
    }

}