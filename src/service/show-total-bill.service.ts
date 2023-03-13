import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ShowTotalBillService {

  constructor(private http: HttpClient) {

  }


  getShowTotalBill() :Observable<ShowTotalBillService[]>{
    return this.http.get<ShowTotalBillService[]>("http://localhost:8080/showTotalBill");
  }


}
