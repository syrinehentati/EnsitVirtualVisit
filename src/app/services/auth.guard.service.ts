import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Import your user service here

import {MdbModalService} from 'mdb-angular-ui-kit/modal';
import { Admin } from './Model/Admin';

import {LoginComponent} from './components/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private modalService: MdbModalService) {

  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(
          (resolve, reject) => {
            const currentUser: Admin = JSON.parse(sessionStorage.getItem('currentAdmin') || '{}');

              if (currentUser !== null)
                  resolve(true);
              else {
                  this.modalService.open(LoginComponent);
                  resolve(false);
              }
          }
      );
  }

}




