import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountToken} from "../../model/AccountToken";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(account: any): Observable<AccountToken>{

    return this.http.post<AccountToken>("http://localhost:8080/login",account);
  }
  register(account: any): Observable<AccountToken>{
    return this.http.post<AccountToken>("http://localhost:8080/register",account);
  }
  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }
  setAccountToken(accountToken: AccountToken){
    localStorage.setItem("accountToken",JSON.stringify(accountToken));
  }

  getAccountToken(): AccountToken{
    return JSON.parse(<any>localStorage.getItem("accountToken"));
  }




}
