import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ShowRoomForGuestService} from "../../service/show-room-for-guest.service";
import {RoomForGuest} from "../../model/RoomForGuest";

@Component({
  selector: 'app-show-room-for-guest',
  templateUrl: './show-room-for-guest.component.html',
  styleUrls: ['./show-room-for-guest.component.css']
})
export class ShowRoomForGuestComponent implements OnInit {
  room: RoomForGuest | undefined;
  rooms: any;
  p: number = 1;
  total: number = 0;
  categoryName!: string;
  addressName!: string;
  price1!: number;
  price2!: number;
  checkin!: string;
  checkout!: string;



  constructor(private showRoomService: ShowRoomForGuestService) {
  }


  ngOnInit(): void {

    this.getRooms()
  }


  getRooms() {
    this.showRoomService.getAll(this.p).subscribe((response: any) => {
      this.rooms = response;
      this.total = this.rooms.length;
      console.log(response)
    })
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.getRooms();
  }

  findRoomByGuest() {
    this.showRoomService.findRoomByGuest(this.categoryName, this.addressName, this.price1, this.price2, this.checkin, this.checkout).subscribe(data => {
      alert("vào đây")
      this.rooms = data
      console.log(data)

    })
  }


}

