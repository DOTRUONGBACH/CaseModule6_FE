import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TopRentComponent} from './top-rent/top-rent.component';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {ShowProfileComponent} from "./account/show-profile/show-profile.component";
import {CrudHostComponent} from "./crud-host/crud-host.component";
import {MyAccountComponent} from "./account/my-account/my-account.component";
import {ShowTotalBill} from "./model/ShowTotalBill";
import {ShowTotalBillComponent} from "./show-total-bill/show-total-bill.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    ShowProfileComponent,
    AppComponent,
    CrudHostComponent,
    TopRentComponent,
   ShowTotalBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,


    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
