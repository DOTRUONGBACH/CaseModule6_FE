import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{
  id: any
  account!: Account;
  accountToken !:AccountToken;

  constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.accountService.findById(this.id).subscribe((data)=>{
      this.account = data
      data.avatar=this.accountToken.avatar
      console.log(this.account)
    })
    this.accountToken =  this.accountService.getAccountToken() ;
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   this.accountService.getAll().subscribe((data)=>{
  //     this.account = data
  //   })
  // }

}




