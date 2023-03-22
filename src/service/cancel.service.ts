import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BillDetail} from "../app/model/BillDetail";

@Injectable({
  providedIn: 'root'
})
export class CancelService {

  constructor(private http: HttpClient) { }
  cancel(bdId: number):Observable<any>{
    return this.http.post<any>('http://localhost:8080/billdetails/status?bdId=' + bdId,{})
  }

  sendEmail(roomId:number, bd: BillDetail):Observable<any>{
    return this.http.post<any>('http://localhost:8080/billdetails/email?roomId='+roomId,bd)
  }
}
