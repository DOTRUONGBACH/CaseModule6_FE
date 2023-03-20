import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [MessageService],

})
export class ChangePasswordComponent implements OnInit {
  id: any;
  currentPassword!: String
  newPassword!: String
  confirmPassword!: String
  account: Account | undefined;
  formChange!: FormGroup;

  constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.formChange = new FormGroup({
      currentPassword: new FormControl(""),
      newPassword: new FormControl(""),
      confirmPassword: new FormControl(""),
    })
    this.accountService.findById(this.id).subscribe(data => {
      this.account = data
      this.account.id = data.id
    })
  }

  changePassword(account: Account | undefined) {
    this.formChange.get('currentPassword')?.setValue(account?.password)
  }


  // change() {
  //   this.currentPassword = this.formChange.value.currentPass
  //   this.newPassword = this.formChange.value.newPass
  //   this.confirmPass = this.formChange.value.confirmPass
  //   if (this.formChange.value.newPass != this.formChange.value.confirmPass)
  //   this.accountService.change(this.id, this.currentPassword, this.newPassword, this.confirmPass).subscribe(data => {
  //     this.showSuccess();
  //     this.router.navigate(['/login'])
  //   })
  // }

  change(){
    // @ts-ignore
    this.accountService.change(this.formChange.value).subscribe((data)=>{
      this.account?.password == this.formChange.value.currentPassword
      this.router.navigate(["/login"])
    })
  }
  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Success, please login!', key: 'ab'});
  }

  showError() {
    this.messageService.add({
      severity: 'error', summary: 'Error', detail: '\n' +
        'Password does not match ', key: 'ab'
    });
  }
}
