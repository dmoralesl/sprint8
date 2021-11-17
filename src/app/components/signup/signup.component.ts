import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  userAlreadyExists: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    const pass: string | null = group.get('password')?.value;
    const passRe: string | null = group.get('passwordRe')?.value;

    return pass === passRe ? null : { notSame: true };
  }

  ngOnInit(): void {
  }

  signUpForm: FormGroup =  new FormGroup({
    user: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordRe: new FormControl('', Validators.required),
  }, { validators: this.checkPasswords });

  signup(): void {
    const user: User = {
      name: this.signUpForm.get('user')?.value,
      password: this.signUpForm.get('password')?.value,
      email: this.signUpForm.get('email')?.value
    }
    this.userAlreadyExists = this.authService.userIsRegistered(user.name);
    this.authService.setUser(user);
  }
}
