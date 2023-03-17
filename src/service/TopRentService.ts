import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TopRent} from "../app/model/TopRent";

@Injectable({
  providedIn: 'root'
})
export class TopRentService {

  constructor(private http: HttpClient) {

  }


  getTopRent() :Observable<TopRent[]>{
    return this.http.get<TopRent[]>("http://localhost:8080/rooms/topRent");
  }


}
