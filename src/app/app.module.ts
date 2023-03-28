import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordVendorComponent } from './components/dashbord-vendor/dashbord-vendor.component';
import { RechercheComponent } from './components/recherche/recherche.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    DashbordVendorComponent,
    RechercheComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
