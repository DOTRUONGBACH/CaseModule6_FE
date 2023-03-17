import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RoomDetail} from "../app/model/RoomDetail";


@Injectable({
  providedIn: 'root'
})
export class ShowRoomDetailService {

  constructor(private http: HttpClient) {

  }


  getRoomDetailById(id:number) :Observable<RoomDetail>{
    console.log(id)
    return this.http.get<RoomDetail>(`http://localhost:8080/rooms/roomDetail/${id}`);
  }


}
