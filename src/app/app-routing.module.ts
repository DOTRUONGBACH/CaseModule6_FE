import {TopRentComponent} from "./top-rent/top-rent.component";
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {AppComponent} from "./app.component";
import {MyAccountComponent} from "./account/my-account/my-account.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: MyAccountComponent},
  {path: '', component: AppComponent},
  {path: 'topRent', component: TopRentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

