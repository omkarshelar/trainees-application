import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { RouterModule ,Routes, Router} from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../services/config.service';
import { StudentsService } from '../../services/students.service';
import { STUDENTS_LIST } from '../../mock-students';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private authServiceObj:AuthService,private toastr: ToastrService, private studentServiceObj: StudentsService) {
  }

  /*
   * Initialize the form and give validators for the form controls. 
   */
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("admin@mail.com",[Validators.required, ConfigService.validateEmail]),
      password: new FormControl("Abc@123",[Validators.required, ConfigService.validatePassword]),
    });
  }

  /*
   * Check login status, and return the correct response. If the user is logged in, the component sets localStorage.
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      let response = this.authServiceObj.authenticateUser(this.loginForm)
      if(response.status == 200) {
        localStorage.setItem('userData',JSON.stringify(response.data));
        // this.studentServiceObj.resetStudents();
        localStorage.setItem("students_list",JSON.stringify(STUDENTS_LIST));
        this.toastr.success('Trainee List fetched',response.msg);
        this.router.navigate(['/']);
      }
      else {
        this.toastr.error('Invalid Credentials', 'Failed');
      }
    }
  }

}
