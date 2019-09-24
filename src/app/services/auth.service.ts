import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {
  }
  

  authenticateUser(userEmail, userPassword) {
    if(userEmail==='admin@mail.com' && userPassword==='abc123') {
      localStorage.setItem('userData',userEmail);
      return true;
    }
    else {
      return false;
    }
  }

  logoutCurrentUser() {
    localStorage.removeItem('userData');
  }

  isLoggedIn() {
    if(localStorage.getItem('userData') === 'admin@mail.com') {
      return true;
    }
    else {
      return false;
    }
  }
  canActivate():boolean {
    if(!this.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false
    }
    else {
      return true;
    }
  }

}
