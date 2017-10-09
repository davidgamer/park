import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntradasComponent } from './entradas/entradas.component';
import {RouterModule, Routes } from '@angular/router';
import { NovoComponent } from './novo/novo.component';
import { HomeComponent } from './home/home.component';
import { CodigosComponent } from './codigos/codigos.component';


const appRoutes: Routes =[
{path:'dashboard',component:DashboardComponent},
{path:'entradas',component:EntradasComponent},
{path:'',component:HomeComponent},
{path:'novo',component:NovoComponent},
{path:'codigos',component:CodigosComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EntradasComponent,
    NovoComponent,
    HomeComponent,
    CodigosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
