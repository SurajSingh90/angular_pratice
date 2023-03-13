import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashemplyComponent } from './dashemply/dashemply.component';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'

import {HttpClientModule} from '@angular/common/http';
import { AddemplyComponent } from './addemply/addemply.component';
import { EditemplyComponent } from './editemply/editemply.component';
import { CartdashboardComponent } from './cartdashboard/cartdashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    DashemplyComponent,
    LoginComponent,
    AddemplyComponent,
    EditemplyComponent,
    CartdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
