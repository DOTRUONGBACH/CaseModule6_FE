import {Component, OnInit, } from '@angular/core';

import {ShowRoomForGuestService} from "../../service/show-room-for-guest.service";

import {RoomForGuest} from "../../model/RoomForGuest";
import {FormGroup, FormControl} from "@angular/forms";
import {AddressService} from "../../../service/address.service";
import {CategoryServiceService} from "../../../service/category-service.service";
import {Category} from "../../model/Category";
import {Address} from "../../model/Address";

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


  categories?: Category[];
  addresses?: Address[];


  constructor(private showRoomService: ShowRoomForGuestService,private addressService: AddressService,
              private categoryService: CategoryServiceService,) {
  }


  ngOnInit(): void {

    this.getRooms()

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    // Lấy danh sách addresses từ server
    this.addressService.getAddress().subscribe(data => {
      this.addresses = data;
    });
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


  FindForm = new FormGroup({
    categoryName: new FormControl(),
    addressName: new FormControl(),
  price1: new FormControl(),
  price2: new FormControl(),
  checkin: new FormControl(),
  checkout: new FormControl(),

  })

  findRoomByGuest() {
    // @ts-ignore
    this.showRoomService.findRoomByGuest(this.FindForm.value).subscribe(data => {
      alert("vào đây")
      this.rooms = data
      console.log(data)

    })
  }



}

