import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Login02Component } from './login02/login02.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPagesModule } from './error-pages/error-pages.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    Login02Component,
  ],
  imports: [
    CommonModule,
    CustomPagesRoutingModule,
    SharedModule,
    ErrorPagesModule,
    NgbModule
  ]
})
export class CustomPagesModule { }
