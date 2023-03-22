import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BillHistory} from "../app/model/BillHistory";
import {HttpClient} from "@angular/common/http";
import {Bill} from "../app/model/Bill";

@Injectable({
  providedIn: 'root'
})
export class HistoryBillService {



  constructor(private httpClient:HttpClient) { }


  BillHistory(accountID:number):Observable<Bill[]>{


    return this.httpClient.get<Bill[]>('http://localhost:8080/bill/showBillByAccountId?accountId=' + accountID)

  }
}
