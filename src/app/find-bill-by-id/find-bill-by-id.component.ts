import {Component, OnInit} from '@angular/core';
import {FindBillByIdService} from "../../service/find-bill-by-id.service";
import {ActivatedRoute} from "@angular/router";
import {BillDetail} from "../model/BillDetail";

@Component({
  selector: 'app-find-bill-by-id',
  templateUrl: './find-bill-by-id.component.html',
  styleUrls: ['./find-bill-by-id.component.css']
})
export class FindBillByIdComponent implements OnInit {
  id!: any;
  billDetails!: BillDetail[];
  p: number = 1;
  total: number = 0;

  constructor(private billdetailservice: FindBillByIdService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {

      this.getBillDetail()

  }

  getBillDetail() {
    this.billdetailservice.findBillDetailByBillId(this.route.snapshot.params['id']).subscribe((respone: any) => {
      // @ts-ignore
      this.billDetails = respone
      this.total = this.billDetails.length
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getBillDetail();
  }

}
