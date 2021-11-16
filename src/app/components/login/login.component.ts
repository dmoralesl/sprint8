import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup =  new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login() {
    // Checking if user exists
    this.logged = this.authService.validateCredentials({
      name: this.loginForm.get('user')?.value, 
      password: this.loginForm.get('password')?.value
    });

    if (this.logged) {
      this.router.navigate(['/']);
    }
  }
}
