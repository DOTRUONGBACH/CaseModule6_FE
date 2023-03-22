import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private accountService: AccountService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }
  url="./assets/e8a1356749352070a79b5c83d4c33935.jpg";
  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    rePassword: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    avatar: new FormControl("")
  })

  register() {
    if (this.registerForm.value.password != this.registerForm.value.rePassword)
      this.showError2();
    this.loginService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      this.showSuccess();
      this.router.navigate(["/login"]);
    })
  }

  checkEmail(mail: string):void{
    this.accountService.findAll().subscribe((data)=>{
      for (let acc of data){
        if (acc.email === mail){
          setTimeout(()=>{
            this.showError()
            this.registerForm.get('email')?.setValue('');
          },50,1)
        }
      }
    })
  }

  checkName(name: string):void{
    this.accountService.findAll().subscribe((data)=>{
      for (let acc of data){
        if (acc.name === name){
          setTimeout(()=>{
            this.showError1()
          },50,10)
            this.registerForm.get('name')?.setValue('');
        }
      }
    })
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Register Success!',key:'ab'});
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email already exists!',key:'ab'});
  }

  showError1() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Name already exists!',key:'ab'});
  }
  showError2() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password does not match',key:'ab'});
  }
}

