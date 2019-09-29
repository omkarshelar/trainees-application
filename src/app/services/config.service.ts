import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { trigger, animate, style, transition } from '@angular/animations';


/*
 * This service is used as a utility in validations
 * for Email, Phone, Name and Password
 */
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
    let passwordRegEx = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W|_]){1,}).{5,}$/;
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
  static validateName(control:AbstractControl):any {
    let nameRegEx = /^[A-Za-z\s]+$/;
    if(nameRegEx.test(control.value))
      return null;
    else
      return { validName:false };
  }
}

/*
 * The following functions are used to apply animations to Components
 */

export function routerTransition() {
  return slideToLeft();
}


function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
      animate('1s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
    ]);
}

