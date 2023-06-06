import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// @ts-ignore
@Injectable({
  providedIn: 'root'
    // updateStt(id: any, arg1: boolean) {
    //     throw new Error('Method not implemented.');
    // }
})
export class CrudHostService {
  private baseUrl = 'http://localhost:8080/post/updateStt/';
  constructor(private http: HttpClient) {
  }
  updateStt(id:number,status: boolean):Observable<any>{
    return this.http.post(this.baseUrl+id,status);
  }
}
