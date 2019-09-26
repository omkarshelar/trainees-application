import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  static validateEmail(control:AbstractControl):any {
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    //console.log(control.value);
    if(emailRegEx.test(control.value)) {
      // console.log("Valid!");
      return null;
    }
    else {
      // console.log("Invalid");
      return { validEmail: false };
    }
  }

  static validatePassword(control:AbstractControl):any {
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}$/;
    if(passwordRegEx.test(control.value)) {
      // console.log("Valid!");
      return null;
    }
    else {
      // console.log("Invalid");
      return { validPassword: false };
    }
  }

  static validatePhone(control:AbstractControl):any {
    let phoneRegEx = /^[789]\d{9}$/;
    if(phoneRegEx.test(control.value)) {
      return null;
    }
    else {
      return { validPhone: false };
    }
  }
}
