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

  logoutCurrentUser() {
    localStorage.clear();
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
