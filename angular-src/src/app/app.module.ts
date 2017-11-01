import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes } from '@angular/router';
import { NovoComponent } from './novo/novo.component';
import { HomeComponent } from './home/home.component';
import { CodigosComponent } from './codigos/codigos.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from '../guards/auth.guard';


const appRoutes: Routes =[
{path:'dashboard',component:DashboardComponent},
{path:'entradas',component:EntradasComponent},
{path:'', component:HomeComponent},
{path:'novo',component:NovoComponent},
{path:'codigos',component:CodigosComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'profile', component:ProfileComponent},
{path:'register', component:RegisterComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EntradasComponent,
    NovoComponent,
    HomeComponent,
    CodigosComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
