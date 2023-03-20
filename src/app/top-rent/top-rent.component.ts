import {Component, OnInit} from '@angular/core';
import {TopRentService} from "../../service/TopRentService";
import {TopRent} from "../model/TopRent";
import {ShowRoomForGuestComponent} from "../rooms/show-room-for-guest/show-room-for-guest.component";


@Component({
  selector: 'app-top-rent',
  templateUrl: './top-rent.component.html',
  styleUrls: ['./top-rent.component.css']
})
export class TopRentComponent implements OnInit{
  topRents: TopRent[] = [];
  constructor(private topRentService:TopRentService) {
  }




  ngOnInit(): void {
    this.topRentService.getTopRent().subscribe(data=>{
      this.topRents = data;

    });
  }

}
