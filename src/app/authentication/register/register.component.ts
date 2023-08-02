import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public showPassword = false;
  email = '';
  name = "";
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = 'you are register with data on firbase';
          this.router.navigate(['/home/home-page01']);
        })
        .catch((_error: any) => {
          this.error = _error;
          this.router.navigate(['/auth/register']);
        });
    }
  }

  validateForm(email: string, password: string) {
     if (this.name.length === 0) {
       this.errorMessage = 'Please Enter Name';
       return false;
     }
    if (email.length === 0) {
      this.errorMessage = 'Please Enter Email Id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Please Enter Password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'Password Should Be At Least 6 Char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }
  public TogglePassword() {
    this.showPassword = !this.showPassword;
  }
}
