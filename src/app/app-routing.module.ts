import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {MyAccountComponent} from "./account/my-account/my-account.component";
import {CrudHostComponent} from "./crud-host/crud-host.component";
import {AppComponent} from "./app.component";
import {TopRentComponent} from "./top-rent/top-rent.component";
import {ShowTotalBillComponent} from "./show-total-bill/show-total-bill.component";
import {ShowRoomForGuestComponent} from "./rooms/show-room-for-guest/show-room-for-guest.component";
import {RouterModule, Routes} from "@angular/router";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {ForgotPasswordComponent} from "./account/forgot-password/forgot-password.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: MyAccountComponent},
  {path: 'host', component: CrudHostComponent},
  {path: '', component: AppComponent},
  {path: 'topRent', component: TopRentComponent},
  {path: 'showBill', component: ShowTotalBillComponent},
  {path: 'showForGuest', component: ShowRoomForGuestComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'changePassword', component: ChangePasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
