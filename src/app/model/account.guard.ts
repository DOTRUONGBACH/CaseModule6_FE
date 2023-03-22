import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../service/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private loginService: LoginService,private router : Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let accountToken = this.loginService.getAccountToken();
    for (const role of accountToken?.roles) {
      if (role.name == "ROLE_USER") {
        return true;
      }
      this.router.navigate(["/login","/register"])
    }
    return false;
  }

}
