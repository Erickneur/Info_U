import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserInterface } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }
  
  loginForm: FormGroup;
  submitted = false;
  error = '';
  
  ngOnInit() {
    this.error = ''
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.onLogin();
  }
  
  onLogin(): void {
    this.authService.loginEmailUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .then((res) => {
      console.log(res);
      this.onLoginRedirect();
    }).catch(err => {
      this.error = err.message;
      console.log(err);
    });
  }
  
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then((res) => {
      console.log('Login Google then', res);
      this.onLoginRedirect();
    }).catch(err => {
      //this.error = err.message;
      console.log('Login Google error', err);
    });
  }
  
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
    .then((res) => {
      console.log(res);
      this.onLoginRedirect();
    }).catch(err => {
      this.error = err.message;
      console.log(err);
    });
  }
  
  onLogout() {
    this.authService.logoutUser();
  }
  
  onLoginRedirect(): void {
    this.router.navigate(['user/profile']);
  }
  
}
