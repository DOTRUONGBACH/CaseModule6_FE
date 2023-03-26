import { Injectable } from '@angular/core';
import {BillDetail} from "../app/model/BillDetail";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BillDTO} from "../app/model/BillDTO";


@Injectable({
  providedIn: 'root'
})
export class BookroomService {

  constructor(private http: HttpClient) {}
  sendEmailbooking(accountId: number,bill: BillDTO ):Observable<any>{
    return this.http.post<any>('http://localhost:8080/billdetails/emailbooking/'+accountId,bill)
  }
}
