import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/authentication/login-page/login-page.component';
import { RegisterComponent } from 'src/app/authentication/register/register.component';

const routes: Routes = [
   {
     path: 'auth',
     children: [
       { path: 'login',  title: 'Templist - Login', component: LoginPageComponent },
       { path: 'register',  title: 'Templist - Register', component: RegisterComponent },
     ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
