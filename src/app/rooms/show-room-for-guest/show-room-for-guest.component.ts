import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {ShowRoomForGuestService} from "../../../service/show-room-for-guest.service";

import {RoomForGuest} from "../../model/RoomForGuest";
import {FormBuilder, FormControlName, FormGroup, FormControl, Validators} from "@angular/forms";
import {Category} from "../../model/Category";
import {Address} from "../../model/Address";
import {CategoryServiceService} from "../../../service/category-service.service";
import {AddressService} from "../../../service/address.service";
import {MessageService} from "primeng/api";
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-show-room-for-guest',
  templateUrl: './show-room-for-guest.component.html',
  styleUrls: ['./show-room-for-guest.component.css'],
  providers: [MessageService]
})
export class ShowRoomForGuestComponent implements OnInit {
  room: RoomForGuest | undefined;
  rooms: any;

  p: number = 1;
  total: number = 0;

  categories?: Category[];
  addresses?: Address[];
  formSearch !: FormGroup;
  stringSearch!: string;
  datePipe: DatePipe = new DatePipe('en-US');


  constructor(private showRoomService: ShowRoomForGuestService, private categoryService: CategoryServiceService,
              private addressService: AddressService, private mess: MessageService) {
  }

  ngOnInit(): void {


    this.getRooms()
    this.formSearch = new FormGroup({
      categoryName: new FormGroup({
        name: new FormControl(""),
      }),
      addressName: new FormGroup({
        name: new FormControl("", [Validators.required]),
      }),
      price1: new FormControl("", [Validators.required]),
      price2: new FormControl("", [Validators.required,]),
      checkin: new FormControl("", [Validators.required]),
      checkout: new FormControl("", [Validators.required]),

    })
    // Lấy danh sách categories từ server
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    // Lấy danh sách addresses từ server
    this.addressService.getAddress().subscribe(data => {
      this.addresses = data;
    });
  }


  getRooms() {
    this.showRoomService.getAll().subscribe((response: any) => {
      this.rooms = response;
      this.total = this.rooms.length;

    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    // @ts-ignore
    this.stringSearch = this.formSearch.get('addressName')?.get('name').value
    if (this.stringSearch != "") {
      this.findRoomByGuest();
    } else {
      this.getRooms();
    }
  }


  showWarn() {
    this.mess.add({severity: 'warn', summary: 'Warn', detail: 'Wrong Date Information', key: 'bc'});
  }

  check: boolean = true

  findRoomByGuest() {
    // @ts-ignore
    let categoryName = this.formSearch.get('categoryName')?.get('name').value
    // @ts-ignore
    let addressName = this.formSearch.get('addressName')?.get('name').value
    let price1
    if (this.formSearch.get('price1')?.value != 0) {
      price1 = this.formSearch.get('price1')?.value
    } else {
      price1 = 1;
    }
    let price2
    if (this.formSearch.get('price2')?.value != 0) {
      price2 = this.formSearch.get('price2')?.value
    } else {
      price2 = 1000;
    }

    let checkin = this.formSearch.get('checkin')?.value
    this.showRoomService.checkinDate = checkin;
    let checkout = this.formSearch.get('checkout')?.value
    this.showRoomService.checkoutDate = checkout;
// @ts-ignore
    if (checkin < this.getFormattedDate() && checkout > this.getFormattedDate()) {
      checkin = "";
      checkout = "";
      this.showWarn();

    }
    // @ts-ignore
    this.showRoomService.findRoomByGuest(categoryName, addressName, price1, price2, checkin, checkout).subscribe(
      (response: any) => {
        this.rooms = response;
        this.total = this.rooms.length;
      }
    )
  }

  getFormattedDate() {
    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return transformDate;
  }

  checkCheckinDate(checkin: any, checkout: any) {
    // @ts-ignore
    if (checkin < this.getFormattedDate() || checkout < this.getFormattedDate()) {
      this.check = false
    } else {
      this.check = true
    }
  }

  checkDate(checkout: any, checkin: any) {
    // @ts-ignore
    if (checkout <= checkin) {
      this.check = false
    } else {
      this.check = true
    }
  }
}

