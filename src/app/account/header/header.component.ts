import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MessageService]
})
export class HeaderComponent implements OnInit {
  userLogin !: any

  constructor(private messageService : MessageService) {
  }

  ngOnInit() {
  }
  loggined(){
    // @ts-ignore
    this.userLogin = localStorage.getItem('accountToken')
    return this.userLogin;
  }
  onLogout(){
    setTimeout(() => {
      this.showSuccess()
    }, 50, 10)
    localStorage.removeItem('accountToken')
  }


  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'See you again !!!', key: 'tc'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Name does not exist', key: 'tc'});
  }
}
