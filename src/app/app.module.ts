import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TopRentComponent} from './top-rent/top-rent.component';

import { ShowTotalBillComponent } from './show-total-bill/show-total-bill.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CrudHostComponent } from './crud-host/crud-host.component';


import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import {RouterOutlet} from "@angular/router";
import {AuthInterceptor} from "./auth.interceptor";
import { MyAccountComponent } from './account/my-account/my-account.component';
import { ShowProfileComponent } from './account/show-profile/show-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    TopRentComponent,
    ShowTotalBillComponent,
    CrudHostComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    ShowProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
