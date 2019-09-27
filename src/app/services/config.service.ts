import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { trigger, state, animate, style, transition } from '@angular/animations';

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
    let passwordRegEx = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,}$/;
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

export function routerTransition() {
  return slideToLeft();
}

export function routerTransitionToRight() {
  return slideToLeft();
}


function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
      animate('1s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),

    transition(':leave', [
      style({transform: 'translateY(100%)', position:'fixed', width:'100%'}),
      animate('0s ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ]);
}

function slideToRight() {
  return trigger('routerTransition', [
    transition(':leave', [
      style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
      animate('1s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),

    transition(':enter', [
      style({transform: 'translateY(100%)', position:'fixed', width:'100%'}),
      animate('1s ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ]);
}

