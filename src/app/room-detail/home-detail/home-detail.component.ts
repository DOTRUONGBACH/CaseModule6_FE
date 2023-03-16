import {Component, OnInit} from '@angular/core';

import {ShowRoomDetailService} from "../../../service/ShowRoomDetail";
import {RoomDetail} from "../../model/RoomDetail";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
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
