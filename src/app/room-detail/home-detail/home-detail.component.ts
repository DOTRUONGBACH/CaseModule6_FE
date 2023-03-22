import {Component, OnInit} from '@angular/core';

import {ShowRoomDetailService} from "../../../service/ShowRoomDetail";
import {RoomDetail} from "../../model/RoomDetail";
import {ActivatedRoute, Router} from "@angular/router";
import {ShowRoomForGuestService} from "../../../service/show-room-for-guest.service";

@Component({
  selector: 'app-home-detail',
  templateUrl:'./home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  roomDetail!: RoomDetail;
  id!: any
  images: any;

  constructor(private showRoomDetailService: ShowRoomDetailService,
              private route: ActivatedRoute,
              private showRoomForGuest: ShowRoomForGuestService,
              private routerlink: Router) {
  }


  // @ts-ignore
  ngOnInit(): void {


    this.getRoomDetailById(this.id)
    this.id = this.route.snapshot.paramMap.get('idRoom')

    this.showRoomDetailService.getRoomDetailById(this.id).subscribe(data => {
      debugger
      this.roomDetail = data
      this.images = data.image.split(",");
      this.roomDetail.images = this.images;

      this.roomDetail.checkinDate = this.showRoomForGuest.checkinDate;
      this.roomDetail.checkoutDate = this.showRoomForGuest.checkoutDate;
      this.roomDetail.amountDay = (new Date(this.showRoomForGuest.checkoutDate).getTime() - new Date(this.showRoomForGuest.checkinDate).getTime()) / (24 * 60 * 60 * 1000);

    })


  }

  arr(id: any) {
    this.showRoomDetailService.rooms=this.showRoomDetailService.getLocalRoom();
    this.showRoomDetailService.rooms.push(this.roomDetail)
    this.showRoomDetailService.setLocalRoom(this.showRoomDetailService.rooms)
    this.routerlink.navigate(["/rent/" + id])
  }

  getRoomDetailById(id: number) {
    this.showRoomDetailService.getRoomDetailById(this.id).subscribe((data) => {
      this.roomDetail = data;
    })
  }




}
