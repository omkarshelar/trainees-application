import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { RouterModule ,Routes, Router} from "@angular/router";
import { StudentsService } from '../../services/students.service';
import { Student } from '../../mock-students';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AddUpdateComponent implements OnInit {
  UserForms:FormGroup;
  id:number;
  action:string;
  oldStudent:Student;
  btnName:string = "Add";
  constructor(private studentServiceObj:StudentsService, private route: ActivatedRoute, private toastr: ToastrService, private router:Router, private location: Location) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    
    if(typeof this.id !== 'undefined') {
      this.oldStudent = this.studentServiceObj.getStudents(this.id)[0]; //clone here(probably)
      this.btnName = "Update";
    }
    else {
      this.oldStudent = new Student();
    }
    // console.log(student);
    this.UserForms = new FormGroup({
      FirstName: new FormControl(this.oldStudent.firstName,[Validators.required, Validators.minLength(3), Validators.maxLength(50),ConfigService.validateName]),
      LastName: new FormControl(this.oldStudent.lastName,[Validators.required, Validators.minLength(3), Validators.maxLength(50),ConfigService.validateName]),
      email: new FormControl(this.oldStudent.email,[Validators.required, ConfigService.validateEmail]),
      phone: new FormControl(this.oldStudent.phone,[Validators.required,ConfigService.validatePhone]),
    });
  }

  onSubmit() {
    if(typeof this.id === 'undefined') {
      let newStudent = new Student(this.studentServiceObj.getLatestId(),this.UserForms.value.FirstName,this.UserForms.value.LastName,this.UserForms.value.email,this.UserForms.value.phone)
      this.studentServiceObj.addStudent(newStudent);
      this.toastr.success("New trainee added","Added");
      this.router.navigate(['/']);
    }
    else if(typeof this.id !== 'undefined') {
      if(this.UserForms.value.email === this.oldStudent.email) {
        //Give toaster here.
        this.toastr.error("Email already exists","Unsuccessful");
      }
      else {
        this.studentServiceObj.updateStudent(this.oldStudent.id,this.UserForms.value.FirstName,this.UserForms.value.LastName,this.UserForms.value.email,this.UserForms.value.phone);
        this.toastr.success("Trainee details updated","Updated");
        this.router.navigate(['']);
      }
    }
  }

  goBack() {
    this.location.back();
  }

}
