import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BillDetail} from "../app/model/BillDetail";
import {HttpClient} from "@angular/common/http";
import {BillDTO} from "../app/model/BillDTO";
import {DataDTO} from "../app/model/DataDTO";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient: HttpClient) { }
  createBill(bill: BillDTO):Observable<any> {
    return this.httpClient.post("http://localhost:8080/billdetails/post",bill)
  }

  createBillDetail(billdetail: DataDTO):Observable<any> {
    return this.httpClient.post("http://localhost:8080/billdetails/post",billdetail)
  }
}
