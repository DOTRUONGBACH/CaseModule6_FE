import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {ForgotPassword} from "../../model/ForgotPassword";
import {AccountService} from "../../service/account/account.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers:[MessageService]
})
export class ForgotPasswordComponent implements OnInit{
  id: any;
  email!: string
  formForgot!: FormGroup
  account: Account | undefined;

constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router,private messageService:MessageService) {
}


  ngOnInit(): void {
    this.formForgot = new FormGroup({
      email: new FormControl(""),
    })
  }
  forgot(){
    this.accountService.forgotPassword(this.formForgot.value).subscribe((data) => {
      this.account?.email === this.formForgot.value.email
        this.showSuccess();
      this.router.navigate(["/login"]);
    } ,(error)=>{this.showError()})
  }


  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Sender Email Success!',key:'ab'});
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email not exists!',key:'ab'});
  }

  showError1() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Name already exists!',key:'ab'});
  }
  showError2() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password does not match',key:'ab'});
  }

}
