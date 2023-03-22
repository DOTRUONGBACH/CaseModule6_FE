import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RoomForGuest} from "../app/model/RoomForGuest";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FindroomService {

  constructor(private httpClient: HttpClient) { }
  findRoomByGuest(categoryName: string, addressName: string, price1: number, price2: number, checkin: string, checkout: string): Observable<RoomForGuest[]> {
    return this.httpClient.get<RoomForGuest[]>(
      `http://localhost:8080/rooms/find/?categoryName=` + categoryName + "&addressName=" + addressName +
      "&price1=" + price1 + "&price2=" + price2 + "&checkin=" + checkin + "&checkout=" + checkout)
  }
}
