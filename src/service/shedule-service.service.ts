import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../app/model/Bill";
import {BillDetail} from "../app/model/BillDetail";

@Injectable({
  providedIn: 'root'
})
export class SheduleServiceService {

  constructor(private httpClient:HttpClient) { }


  schedule(roomID:number):Observable<BillDetail[]>{


    return this.httpClient.get<BillDetail[]>('http://localhost:8080/billdetails/schedule/' + roomID)

  }
}
