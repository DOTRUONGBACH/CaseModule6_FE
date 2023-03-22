import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css'],
  providers:[MessageService]
})
export class ShowProfileComponent implements OnInit {
  id: any;
  account: Account | undefined;
  formEdit!: FormGroup;

  constructor(private accountService: AccountService,
              private http: HttpClient, private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.formEdit = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("",Validators.required),
      phone: new FormControl("",[Validators.required,Validators.pattern("[0-9 ]{10}")]),
      email: new FormControl(""),
      avatar: new FormControl("",),

    })
    this.accountService.findById(this.id).subscribe(data => {
      console.log(data)
      this.account = data
    })
    this.showEdit(this.account)

  }
  showEdit(account: Account | undefined) {
      this.formEdit.get('id')?.setValue(account?.id)
      this.formEdit.get('name')?.setValue(account?.name)
      this.formEdit.get('phone')?.setValue(account?.phone)
      this.formEdit.get('email')?.setValue(account?.email)
      this.formEdit.get('avatar')?.setValue(account?.avatar)
  }

editProfile()
{
  let accountNew = this.formEdit.value
  console.log(accountNew)
  this.accountService.create(accountNew).subscribe(data => {
    this.showSuccess();
  })
  setTimeout(()=>{
    this.router.navigate(["/login"]);
  },2000,10)
}


  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Change Success! Please login',key:'ab'});
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email already exists!',key:'ab'});
  }
}
