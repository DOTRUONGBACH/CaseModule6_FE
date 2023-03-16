import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BillDetail} from "../app/model/BillDetail";

@Injectable({
  providedIn: 'root'
})
export class FindBillByIdService {

  constructor(private httpClient: HttpClient) { }


  // @ts-ignore
  findBillDetailByBillId(billId: number):Observable<BillDetail[]> {

   return  this.httpClient.get<BillDetail[]>("http://localhost:8080/billdetails/findByBillId?billId="+billId)
  }
}
