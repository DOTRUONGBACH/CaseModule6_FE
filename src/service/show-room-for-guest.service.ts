import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../app/model/Room";
import {Observable} from "rxjs";
import {RoomForGuest} from "../app/model/RoomForGuest";

@Injectable({
  providedIn: 'root'
})
export class ShowRoomForGuestService {

  id!: number;
  name!: string;
  addressRoom!: string;
  price!: number;
  image!: any;
  images!: [];
  description!: string;

  checkinDate!: any;
  checkoutDate!: any;

  constructor(private httpClient: HttpClient) {
  }

  private url = 'http://localhost:8080/rooms/showRoomForGuest';

  getAll(): Observable<RoomForGuest[]> {
    return this.httpClient.get<RoomForGuest[]>(this.url)
  }

  findRoomByGuest(categoryName: string, addressName: string, price1: number, price2: number, checkin: string, checkout: string): Observable<RoomForGuest[]> {
    return this.httpClient.get<RoomForGuest[]>(
      `http://localhost:8080/rooms/find/?categoryName=` + categoryName + "&addressName=" + addressName +
      "&price1=" + price1 + "&price2=" + price2 + "&checkin=" + checkin + "&checkout=" + checkout)
  }
}
