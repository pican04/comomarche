import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordVendorComponent } from './components/dashbord-vendor/dashbord-vendor.component';
import { RechercheComponent } from './components/recherche/recherche.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'recherche', component: RechercheComponent
  },
  {
    path: 'nouveau-compte', component: SignupComponent
  },
  {
    path: 'dashboard-vendor', component: DashbordVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
