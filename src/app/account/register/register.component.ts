import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    rePassword: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", Validators.required),
    avatar: new FormControl("", Validators.required)
  })

  register() {
    if (this.registerForm.value.password != this.registerForm.value.rePassword)
      alert("RePassword wrong!")
    this.loginService.register(this.registerForm.value).subscribe((data) => {
      console.log(data)
      alert("Success!!")
      this.router.navigate(["/login"]);
    })
  }

}
