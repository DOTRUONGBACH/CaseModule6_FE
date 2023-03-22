import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {RoomDetail} from "../app/model/RoomDetail";
import {AccountToken} from "../app/model/AccountToken";


@Injectable({
  providedIn: 'root'
})
export class ShowRoomDetailService {
  rooms : RoomDetail[] = [];


  constructor(private http: HttpClient) {

  }


  getRoomDetailById(id: number): Observable<RoomDetail> {
    console.log(id)
    return this.http.get<RoomDetail>(`http://localhost:8080/rooms/roomDetail/${id}`);
  }

  getCartRoomDetail(id: number): Observable<RoomDetail[]> {
    console.log(id)
    return this.http.get<RoomDetail[]>(`http://localhost:8080/rooms/roomDetail/${id}`);
  }
  setLocalRoom(roomDetails: RoomDetail[]){
    localStorage.setItem("carts",JSON.stringify(roomDetails));
  }

  getLocalRoom(): RoomDetail[]{
    let carts = JSON.parse(<any>localStorage.getItem("carts"));

    return carts;
  }

}
