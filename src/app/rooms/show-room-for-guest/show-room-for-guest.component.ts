import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ShowRoomForGuestService} from "../../service/show-room-for-guest.service";
import {Room} from "../../model/Room";

@Component({
  selector: 'app-show-room-for-guest',
  templateUrl: './show-room-for-guest.component.html',
  styleUrls: ['./show-room-for-guest.component.css']
})
export class ShowRoomForGuestComponent implements OnInit{
  room:Room|undefined;
  rooms:Room[]=[];
rooms1:Room[]=[];

  constructor(private showRoomService:ShowRoomForGuestService) {
  }


  ngOnInit(): void {

    this.showRoomService.getAll().subscribe((data)=>{
      this.rooms = data
      this.getData({pageIndex: this.page, pageSize: this.size});
    });
  }
  page = 0;
  size = 4;
  // @ts-ignore
  getData(obj) {

    let index=0,
      startingIndex=obj.pageIndex * obj.pageSize,
      endingIndex=startingIndex + obj.pageSize;
    console.log(this.rooms)
    this.rooms1 = this.rooms.filter(() => {console.log(2)
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

}

