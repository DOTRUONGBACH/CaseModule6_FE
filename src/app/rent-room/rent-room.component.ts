import {Component, OnInit} from '@angular/core';
import {RoomDetail} from "../model/RoomDetail";
import {ShowRoomDetailService} from "../../service/ShowRoomDetail";
import {ActivatedRoute, Router} from "@angular/router";
import {ShowRoomForGuestService} from "../../service/show-room-for-guest.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Account} from "../model/Account";
import {AccountService} from "../service/account/account.service";
import {Bill} from "../model/Bill";
import {BillDTO} from "../model/BillDTO";
import {BillService} from "../../service/bill.service";
import {DataDTO} from "../model/DataDTO";
import {DatePipe} from '@angular/common';
import {BookroomService} from "../../service/bookroom.service";

@Component({
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrls: ['./rent-room.component.css']
})
export class RentRoomComponent implements OnInit {


  data!: DataDTO[];
  formCreateBillDetail!: FormGroup;
  billdetail!: DataDTO;
  roomDetail!: RoomDetail;
  bill!: BillDTO;
  rooms !: RoomDetail[];
  id!: any
  images: any;
  totalBill: number = 0;
  datePipe: DatePipe = new DatePipe('en-US')

  constructor(private showRoomDetailService: ShowRoomDetailService, private route: ActivatedRoute,
              private showRoomForGuest: ShowRoomForGuestService, private billService: BillService,private router: Router,
              private accountService: AccountService,private bookRoomService: BookroomService) {
    this.rooms = this.showRoomDetailService.rooms;

  }


  ngOnInit(): void {

    console.log(this.getFormattedDate())
    this.bill = new BillDTO();
    for (let i = 0; i < this.rooms.length; i++) {
      this.totalBill += this.rooms[i].amountDay * this.rooms[i].price
    }
    this.bill.date = this.getFormattedDate()
    console.log(this.bill.date)
    this.bill.idAccount = this.accountService.getAccountToken().id;
    this.bill.data = this.showRoomDetailService.getLocalRoom();

    this.bill.totalPrice = this.totalBill;

    console.log(this.bill)
    console.log(this.showRoomDetailService.rooms)
    this.rooms = this.showRoomDetailService.getLocalRoom();


  }


  remove111(index: number) {
    this.rooms.splice(index, 1)
    this.showRoomDetailService.setLocalRoom(this.rooms)
    this.rooms = this.showRoomDetailService.getLocalRoom();
  }

  createBill() {
    const accountId = this.accountService.getAccountToken().id;
    this.billService.createBill( this.bill).subscribe(data => {

      const id = data.id;
      console.log(id);
      this.router.navigateByUrl(`/findbillbyid/${id}`);
      alert('successfully pay')
      localStorage.removeItem("carts");
      this.bookRoomService.sendEmailbooking(accountId, this.bill).subscribe(data=>{
      })

    })
  }

  createBillDetail() {
    this.billService.createBillDetail(this.billdetail).subscribe(data => {

    })
  }

  getFormattedDate() {

    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return transformDate;

  }
}













