import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";
import {MessageService} from "primeng/api";
import {AccountService} from "../../service/account/account.service";
import {daLocale} from "ngx-bootstrap/chronos";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private messageService: MessageService, private accountService: AccountService) {
  }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    name: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  newAcc !: AccountToken;

  login() {
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      this.loginService.setAccountToken(data);
      this.loginService.setToken(data.token);
      this.newAcc = this.loginService.getAccountToken();
      if (this.newAcc.roles[0].name === "ROLE_ADMIN") {
        this.router.navigate(["/admin"])
      } else if (this.newAcc.name != null) {
        this.showSuccess2()
        setTimeout(() => {
          this.router.navigate(["/showForGuest"])
        }, 2000, 10)
      } else {
        debugger
        this.showError()
      }
    })

  }
  checkNameLogin(accountToken: AccountToken): void {
    this.accountService.findAll().subscribe((data) => {
      for (let a of data) {
        if (a.name == this.loginForm.value.name) {
          setTimeout(() => {
            this.showSuccess2()
          }, 50, 10)
        } else {
          setTimeout(() => {
            this.showError();
          }, 50, 10)

        }
      }
    })
  }
  showSuccess2() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Login successfully!', key: 'tc'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Name does not exist', key: 'tc'});
  }
}
