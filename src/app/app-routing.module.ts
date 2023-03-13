import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowRoomForGuestComponent} from "./rooms/show-room-for-guest/show-room-for-guest.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path:'showForGuest', component: ShowRoomForGuestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
