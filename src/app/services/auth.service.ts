import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersRegistered: User[] = [];
  isLoggedIn: boolean = false;

  constructor() { 
    // Populate usersRegistered array with localStorage data if it exists
    if (window.localStorage.getItem('users')) {
      const users = JSON.parse(window.localStorage.getItem('users')?? '[]');
      this.usersRegistered = users;
    }
    // Checking if user is logged
    if (window.localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = JSON.parse(window.localStorage.getItem('isLoggedIn')?? 'false');
    }
  }


  setUser(user: User): void {
    if (!this.userIsRegistered(user.name)) {
      this.usersRegistered.push(user);
      window.localStorage.setItem('users', JSON.stringify(this.usersRegistered));
    }
  }

  userIsRegistered(username: string): boolean {
   if (this.usersRegistered.find(user => user.name === username)) {
      return true;
    }

    return false; 
  }

  validateCredentials(user: User): boolean {
    // If user does not exists, return false
    if (!this.userIsRegistered(user.name)) {
      return false;
    } 
    // If user exists but password is incorrect, return false
    if (this.usersRegistered.find(u => u.name === user.name)?.password !== user.password) {
      return false;
    }
    // Else, credentials are correct
    this.loginUser();
    return true;
  }

  loginUser() {
    this.isLoggedIn = true;
    window.localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }
}

