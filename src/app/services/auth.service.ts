import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {  } from './students.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {
  }

/* 
 * Function to authenticate user at login.
 * The message returned is used in toaster.
 */
  authenticateUser(loginForm) {
    if(loginForm.value.email==='admin@mail.com' && loginForm.value.password==='Abc@123') {
      return {
        status:200,
        msg:"Welcome",
        data:loginForm.value
      }
    }
    else {
      return {
        status:401,
        msg:"Invalid Credentials",
        data:null
      }
    }
  }

  /*
   * Clear local storage on logout.
   */
  logoutCurrentUser() {
    localStorage.clear();
  }

 /*
  * Check if the user is logged in using localStorage
  */
  isLoggedIn() {
    if(localStorage.getItem('userData')) {
      return true;
    }
    else {
      return false;
    }
  }

/*
 * CanActivate used in routing
 * Protect  all routes except /login
 */
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
