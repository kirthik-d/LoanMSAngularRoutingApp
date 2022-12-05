import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './customer/apply/apply.component';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { CustomerRegComponent } from './customer/customer-reg/customer-reg.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'home/login',component:LoginComponent},
  {path:'home/register',component:RegisterComponent, canActivateChild: [],
  children: [
      { path: 'home/login', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
  ]
 },
  {path:'applynow',component:CustomerRegComponent},
  {path:'apply',component:ApplyComponent},
  {path:'admin',component:CustomerDisplayComponent},
 {path:'aboutus', component:AboutusComponent},
 {path:'service', component:ServicesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
