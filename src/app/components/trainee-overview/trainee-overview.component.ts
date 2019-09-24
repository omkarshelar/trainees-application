import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../mock-students'

@Component({
  selector: 'app-trainee-overview',
  templateUrl: './trainee-overview.component.html',
  styleUrls: ['./trainee-overview.component.css']
})
export class TraineeOverviewComponent implements OnInit {

  students:Student[];
  constructor(private studentServiceObj:StudentsService, private router:Router) { }

  ngOnInit() {
    this.students = this.studentServiceObj.getStudents();
  }
  add() {
    
  }

  deleteTrainee(email) {
    this.studentServiceObj.deleteStudent(email);
    this.students = this.studentServiceObj.getStudents();
    //Code for success toaster
  }

}
