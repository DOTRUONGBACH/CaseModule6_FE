import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TopRentComponent} from './top-rent/top-rent.component';
import {RouterOutlet} from "@angular/router";
import { ShowTotalBillComponent } from './show-total-bill/show-total-bill.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrudHostComponent } from './crud-host/crud-host.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TopRentComponent,
    ShowTotalBillComponent,
    CrudHostComponent

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
