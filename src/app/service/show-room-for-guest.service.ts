import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../model/Room";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowRoomForGuestService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Room[]>{
    return this.httpClient.get<Room[]>("http://localhost:8080/rooms")
  }
}
