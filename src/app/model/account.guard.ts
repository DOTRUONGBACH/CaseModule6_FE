import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private loginService: LoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userToken = this.loginService.getAccountToken();
    for (const role of userToken?.roles) {
      if (role.name == "ROLE_USER") {
        return true;
      }
    }
    return false;
  }

}
