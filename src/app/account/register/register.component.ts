import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";
// @ts-ignore
import {MessageService} from "primeng/api";
import {AccountToken} from "../../model/AccountToken";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  file:any;

  constructor(private loginService: LoginService,
              private router: Router,
              private accountService: AccountService,
              private messageService: MessageService,
              private http:HttpClient) {
  }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    rePassword: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required,Validators.pattern("[0-9 ]{10}")]),
    avatar: new FormControl()
  })

  getFile(event:any){
    this.file = event.target.files[0];
    console.log(this.file)
  }


  register() {
    console.log('||',this.registerForm.value)
    const img = new FormData();
    img.append('img', this.file);

    this.registerForm.value["avatar"] = "this.file.getOriginal"

    if (this.registerForm.value.password != this.registerForm.value.rePassword){
      this.showError2();
    }else {
      this.showSuccess()
      this.loginService.register( this.registerForm.value).subscribe((data) => {
        setTimeout(()=>{
          this.router.navigate(["/login"]);
        },50,10)
      })
      this.loginService.saveImg(img).subscribe((data) => {
        console.log("img1",data);
      })
    }

  }

  checkEmail(mail: string): void {
    this.accountService.findAll().subscribe((data) => {
      for (let acc of data) {
        if (acc.email === mail) {
          setTimeout(() => {
            this.showError()
            this.registerForm.get('email')?.setValue('');
          }, 50, 1)
        }
      }
    })
  }

  checkName(name: string): void {
    this.accountService.findAll().subscribe((data) => {
      for (let acc of data) {
        if (acc.name === name) {
          setTimeout(() => {
            this.showError1()
          }, 50, 10)
          this.registerForm.get('name')?.setValue('');
        }
      }
    })
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Register Success!', key: 'ab'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email already exists!', key: 'ab'});
  }

  showError1() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Name already exists!', key: 'ab'});
  }

  showError2() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password does not match', key: 'ab'});
  }
}

