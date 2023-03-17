import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CrudHostService {
  private baseUrl = 'http://localhost:8080/post/updateStt/';
  constructor(private http: HttpClient) {
  }
  updateStt(id:number,status: boolean):Observable<any>{
    return this.http.post(this.baseUrl+id,status);
  }
}
