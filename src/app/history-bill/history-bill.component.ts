import {Component, OnInit} from '@angular/core';
import {HistoryBillService} from "../../service/history-bill.service";
import {AccountService} from "../service/account/account.service";
import {Account} from "../model/Account";
import {BillHistory} from "../model/BillHistory";

@Component({
  selector: 'app-history-bill',
  templateUrl: './history-bill.component.html',
  styleUrls: ['./history-bill.component.css']
})
export class HistoryBillComponent implements OnInit {
  account: Account | undefined;
  accountID!: number;
  // @ts-ignore
  billhistory: any;

  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    // @ts-ignore
    this.accountID = this.account?.id
    console.log(this.accountID)
    this.getBill()

  }

  constructor(private billHistoryService: HistoryBillService, private accountService: AccountService) {
  }

  getBill() {
    this.billHistoryService.BillHistory(this.accountID).subscribe((respone: any) => {
      this.billhistory = respone;
      this.total = this.billhistory.length
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getBill();
  }

}
