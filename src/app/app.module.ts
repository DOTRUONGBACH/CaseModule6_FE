import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormsModule, ReactiveFormsModule,} from "@angular/forms";
import { ShowRoomForGuestComponent } from './rooms/show-room-for-guest/show-room-for-guest.component';
import {RouterModule} from "@angular/router";
import { CrudHostComponent } from './crud-host/crud-host.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRoomForGuestComponent,
    CrudHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormControl,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
