import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SchclassComponent } from './schclass/schclass.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"schclass", component:SchclassComponent},
  {path:"studentreg", component:StudentregComponent},
  {path:"header", component:HeaderComponent},
  {path:"login", component:LoginComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"about", component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
