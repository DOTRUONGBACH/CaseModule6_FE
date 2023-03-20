import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Account} from "../../model/Account";
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  id: any;
  account: Account | undefined;
  formEdit!: FormGroup;

  constructor(private accountService: AccountService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account?.id
    this.formEdit = new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      avatar: new FormControl(""),

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
    this.router.navigate(['/login'])
  })
}
}
