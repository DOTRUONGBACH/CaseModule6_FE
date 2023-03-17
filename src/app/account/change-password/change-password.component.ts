import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  id: any;
  currentPassword!: String
  newPassword!: String
  confirmPass!: String

  account: Account | undefined;
  formChange!: FormGroup;
  constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.formChange = new FormGroup({
      currentPass: new FormControl(""),
      newPass: new FormControl(""),
      confirmPass: new FormControl(""),
    })
    this.accountService.findById(this.id).subscribe(data => {
      console.log(data)
      this.account = data
    })
  }
  changePassword(account: Account | undefined) {
    this.formChange.get('currentPassword')?.setValue(account?.password)
  }


  change() {
    this.currentPassword = this.formChange.value.currentPass
    this.newPassword = this.formChange.value.newPass
    this.confirmPass = this.formChange.value.confirmPass
    if (this.formChange.value.newPassword != this.formChange.value.reNewPassword)
      alert("RePassword wrong!")
    this.accountService.change(this.id, this.currentPassword, this.newPassword, this.confirmPass).subscribe(data => {
      alert("Success, please login!")
      this.router.navigate(['/login'])
    })
  }
  checkPassword(currentPass: string){
    this.accountService.findAll().subscribe((data)=>{
      for (let acc of data){
        if (acc.password !== currentPass){
          alert("Wrong current password ")
        }
      }
    })
  }
}
