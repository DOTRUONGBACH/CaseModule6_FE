import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../model/Room";
import {Observable} from "rxjs";
import {RoomForGuest} from "../model/RoomForGuest";

@Injectable({
  providedIn: 'root'
})
export class ShowRoomForGuestService {

  constructor(private httpClient: HttpClient) {
  }

  private url = 'http://localhost:8080/rooms/showRoomForGuest';

  getAll(page: number): Observable<RoomForGuest[]> {
    return this.httpClient.get<RoomForGuest[]>(this.url + '?page=' + page)
  }
  findRoomByGuest(categoryName:string, addressName:string, price1:number,price2:number,checkin: string, checkout: string ):Observable<RoomForGuest[]> {
    return  this.httpClient.get<RoomForGuest[]>( `http://localhost:8080/rooms/find/${categoryName}/${addressName}/${price1}/${price2}/${checkin}/${checkout}`)
  }
}
