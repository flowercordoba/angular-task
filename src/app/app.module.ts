import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P404Component } from './pages/p-404/p-404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { NofiticationComponent } from './components/nofitication/nofitication.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    DashboardComponent,
    PagesComponent,
    NofiticationComponent,
    PaginationComponent,
    SearchComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
