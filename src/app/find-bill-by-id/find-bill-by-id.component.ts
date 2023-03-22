import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FindBillByIdService} from "../../service/find-bill-by-id.service";
import {ActivatedRoute} from "@angular/router";
import {BillDetail} from "../model/BillDetail";
import {MessageService} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {CancelService} from "../../service/cancel.service";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-find-bill-by-id',
  templateUrl: './find-bill-by-id.component.html',
  styleUrls: ['./find-bill-by-id.component.css'],
  providers: [MessageService,ConfirmationService,DatePipe]
})
export class FindBillByIdComponent implements OnInit {
  id!: any;
  billDetails!: BillDetail[];
  p: number = 1;
  total: number = 0;
  now = new Date();
  oneDay = 24*60*60;
  constructor(private billdetailservice: FindBillByIdService, private route: ActivatedRoute, private messageService: MessageService,
              private confirmationService: ConfirmationService, private cancelService: CancelService, private datePipe: DatePipe) {
  }

  checkIfCancelAvailable(checkin: Date): boolean {
checkin = new Date(checkin);
    checkin.setHours(0, 0, 0, 0);
   this.now.setHours(0,0,0,0);
    console.log(checkin.getTime() <= this.now.getTime()-this.oneDay)
    return checkin.getTime() <= this.now.getTime()-this.oneDay;
  }

  ngOnInit(): void {
    this.getBillDetail()

  }

  getBillDetail() {
    this.billdetailservice.findBillDetailByBillId(this.route.snapshot.params['id']).subscribe((respone: any) => {
      // @ts-ignore
      this.billDetails = respone;
      this.total = this.billDetails.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getBillDetail();
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Cancel Success!', key: 'c'});
  }

  showError() {
    this.messageService.add({severity: 'fail', summary: 'Fail', detail: 'Something wrong', key: 'c'})
  }

  confirmCancel(bd: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.cancelService.cancel(bd.id).subscribe((data: any) => {
          bd.status = false;
          this.showSuccess();
          this.cancelService.sendEmail(bd.room.id,bd).subscribe((data2:any) => {
            this.showSuccess()
          },error => {
            this.showError();
          })
          }, error => {
            this.showError()
          }
        )
      }
    });
  }


}
