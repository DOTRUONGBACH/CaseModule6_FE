import {Component, OnInit} from '@angular/core';
import {SheduleServiceService} from "../../service/shedule-service.service";
import {ActivatedRoute} from "@angular/router";
import {BillDetail} from "../model/BillDetail";

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit{

  billDetails!: BillDetail[];
  constructor(
    private showSchedule: SheduleServiceService,private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getBillDetail2()
    }
  p: number = 1;
  total: number = 0;
  pageChangeEvent(event: number) {
    this.p = event;
    this.getBillDetail2();
  }


  getBillDetail2() {
    this.showSchedule.schedule(this.route.snapshot.params['idRoom']).subscribe((response: any) => {
     this.billDetails = response
      console.log(this.billDetails)
      this.total = this.billDetails.length
    })
  }
}
