import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService: LoginService, private router:Router) { }
  ngOnInit(): void {
    console.log("4")
  }
  loginForm = new FormGroup({
    name: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  newAcc !: AccountToken;
  login() {
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      this.loginService.setAccountToken(data);
      alert("Thành công!")
      this.loginService.setToken(data.token);
      console.log(this.loginService.getAccountToken())
      this.newAcc = this.loginService.getAccountToken();
      if(this.newAcc.roles[0].name === "ROLE_ADMIN"){
        this.router.navigate(["admin"])
      }else{
        this.router.navigate(["account"])
      }
    })
  }
}
