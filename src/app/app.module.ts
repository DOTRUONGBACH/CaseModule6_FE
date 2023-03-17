import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrudHostComponent } from './crud-host/crud-host.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShowRoomForGuestComponent} from "./rooms/show-room-for-guest/show-room-for-guest.component";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {MyAccountComponent} from "./account/my-account/my-account.component";
import {ShowProfileComponent} from "./account/show-profile/show-profile.component";
import {TopRentComponent} from "./top-rent/top-rent.component";
import {ShowTotalBillComponent} from "./show-total-bill/show-total-bill.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";



import { ShowCommentComponent } from './room-detail/show-comment/show-comment.component';
import { HomeDetailComponent } from './room-detail/home-detail/home-detail.component';
import { HistoryBillComponent } from './history-bill/history-bill.component';
import { FindBillByIdComponent } from './find-bill-by-id/find-bill-by-id.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRoomForGuestComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    ShowProfileComponent,
    AppComponent,
    CrudHostComponent,
    TopRentComponent,
   ShowTotalBillComponent,
   ShowTotalBillComponent,
   ShowCommentComponent,
   HomeDetailComponent,
   HistoryBillComponent,
   FindBillByIdComponent,
   ShowScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,


    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
