import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../../model/Account";
import {Observable} from "rxjs";
import {AccountToken} from "../../model/AccountToken";
import {ChangePassword} from "../../model/ChangePassword";

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
    return this.http.get<Account>('http://localhost:8080/account/account/' + id)
  }

  create(account : Account): Observable<Account> {
      return this.http.put<Account>('http://localhost:8080/account/',account)
  }

  setToken(token: string){
    localStorage.setItem("token",token);
  }

  change(changePassword:ChangePassword | undefined): Observable<ChangePassword> {
    return this.http.post<ChangePassword>('http://localhost:8080/account/changePassword/', changePassword)
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
  findByEmail(email: string):Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account/'+ email);
  }


  forgotPassword(email: string):Observable<any>{
    return this.http.post<any>('http://localhost:8080/account/forgotPassword/', email);
  }
}

