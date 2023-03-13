import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit,OnChanges {
  account: Account[] = []
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe((data)=>{
      this.account = data
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.accountService.getAll().subscribe((data)=>{
      this.account = data
    })
  }

}
