import {Component, OnInit} from '@angular/core';
import {RoomDetail} from "../model/RoomDetail";
import {ShowRoomDetailService} from "../../service/ShowRoomDetail";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrls: ['./rent-room.component.css']
})
export class RentRoomComponent implements OnInit {
  roomDetail!: RoomDetail;
  id!: any
  images: any;

  constructor(private showRoomDetailService: ShowRoomDetailService, private route: ActivatedRoute) {
  }


  // @ts-ignore
  ngOnInit(): void {


    this.getRoomDetailById(this.id)
    this.id = this.route.snapshot.paramMap.get('idRoom')

    this.showRoomDetailService.getRoomDetailById(this.id).subscribe(data => {
      this.roomDetail = data
      this.images = data.image.split(",");
      this.roomDetail.images = this.images;
    })

  }


  getRoomDetailById(id: number) {
    this.showRoomDetailService.getRoomDetailById(this.id).subscribe((data) => {
      this.roomDetail = data;
    })
  }

}
