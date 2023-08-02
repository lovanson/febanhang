import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { Login02Component } from './login02/login02.component';
import { RegisterComponent } from './register/register.component';
import { Level11Component } from './sample-level/level-3/level11/level11.component';
import { Level12Component } from './sample-level/level-3/level12/level12.component';
import { Level13Component } from './sample-level/level-3/level13/level13.component';
import { Level01Component } from './sample-level/level01/level01.component';
import { Level02Component } from './sample-level/level02/level02.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        title: 'Templist - register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        title: 'Templist - login',
        component: LoginComponent,
      },
      {
        path: 'login02',
        title: 'Templist - login02',
        component: Login02Component,
      },
      {
        path: 'forgot-password',
        title: 'Templist - forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
  {
    path: 'sample-level',
    children: [
      {
        path: 'level01',
        title: 'Templist - level01',
        component: Level01Component,
      },
      {
        path: 'level02',
        title: 'Templist - level02',
        component: Level02Component,
      },
      {
        path: 'level-3',
        children: [
          {
            path: 'level11',
            title: 'Templist - level11',
            component: Level11Component,
          },
          {
            path: 'level12',
            title: 'Templist - level12',
            component: Level12Component,
          },
          {
            path: 'level13',
            title: 'Templist - level13',
            component: Level13Component,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
