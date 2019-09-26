import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { RouterModule ,Routes, Router} from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private authServiceObj:AuthService,private toastr: ToastrService) { 
    //The flowwing line is a test line delete it.
    //toastr.error('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, ConfigService.validateEmail]),
      password: new FormControl(null,[Validators.required, ConfigService.validatePassword]),
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      let response = this.authServiceObj.authenticateUser(this.loginForm)
      if(response.status == 200) {
        localStorage.setItem('userData',JSON.stringify(response.data));
        this.toastr.success('Trainee Details fetched',response.msg);
        this.router.navigate(['/']);
      }
      else {
        this.toastr.error('Invalid Credentials', 'Failed');
      }
    }
  }

}
