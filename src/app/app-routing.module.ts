import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {TopRentComponent} from "./top-rent/top-rent.component";

const routes: Routes = [
  {path:'topRent', component: TopRentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
