import { NgModule } from '@angular/core';
import {TopRentComponent} from "./top-rent/top-rent.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'topRent', component: TopRentComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {}
