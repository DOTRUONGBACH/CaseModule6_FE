import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {
  }
  baseUrl: String = 'http://localhost:8080/post/address';
  getAddress(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`)}
}
