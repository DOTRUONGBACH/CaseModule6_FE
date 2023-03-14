import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../../model/Account";
import {Observable} from "rxjs";
import {AccountToken} from "../../model/AccountToken";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) {

  }
  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8080/account/');
  }

  findById(id : number): Observable<Account> {
    return this.http.get<Account>('http://localhost:8080/account/' + id)
  }

  create(account : Account): Observable<Account> {
      return this.http.post<Account>('http://localhost:8080/login/profile/', account)
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
  findAll(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8080/account');
  }
}

