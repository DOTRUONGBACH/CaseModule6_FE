import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../app/model/Room";

@Injectable({
  providedIn: 'root'
})
export class SaveRoomInfoService {
  private baseUrl = 'http://localhost:8080/post/room/';
constructor(private http: HttpClient) {
  }
  saveRoom(room:Room,accountId: number):Observable<any>{
    console.log(room)
    return this.http.post(this.baseUrl + accountId, room);
  }
}
