import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {ChangePassword} from "../../model/ChangePassword";

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
  changePassword: ChangePassword | undefined

  constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.formChange = new FormGroup({
      id: new FormControl(this.id),
      currentPassword: new FormControl(""),
      newPassword: new FormControl(""),
      confirmPassword: new FormControl(""),
    })
    this.accountService.findById(this.id).subscribe(data => {
      this.account = data
    })
  }

  change(){
    this.changePassword = this.formChange.value
    this.accountService.change(this.changePassword).subscribe(data=>{
      if ( this.account?.password == this.formChange.value.currentPassword){
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(["/login"])
        }, 2000, 10)
      }else {
        this.showError();
      }
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
