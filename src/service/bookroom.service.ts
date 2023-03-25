import { Injectable } from '@angular/core';
import {BillDetail} from "../app/model/BillDetail";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookroomService {

  constructor(private http: HttpClient) {}
  sendEmailbooking(roomId:number, bd: BillDetail):Observable<any>{
    return this.http.post<any>('http://localhost:8080/billdetails/emailemailbooking?roomId='+roomId,bd)
  }
}
