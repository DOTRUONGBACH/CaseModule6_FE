import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    ShowProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,


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
export class AppModule { }
