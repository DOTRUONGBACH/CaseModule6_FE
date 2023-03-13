import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TopRentComponent} from './top-rent/top-rent.component';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowTotalBillComponent } from './show-total-bill/show-total-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    TopRentComponent,
    ShowTotalBillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
