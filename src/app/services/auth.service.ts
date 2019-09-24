import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {
  }
  

  authenticateUser(loginForm) {
    if(loginForm.value.email==='admin@mail.com' && loginForm.value.password==='Abc@123') {
      localStorage.setItem('userData',JSON.stringify(loginForm.value));
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
    if(localStorage.getItem('userData')) {
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
