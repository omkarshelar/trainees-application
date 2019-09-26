import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../mock-students';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainee-overview',
  templateUrl: './trainee-overview.component.html',
  styleUrls: ['./trainee-overview.component.css']
})
export class TraineeOverviewComponent implements OnInit {
  public showTable:boolean = true;
  students:Student[];
  searchQuery = "";
  constructor(private studentServiceObj:StudentsService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.students = this.studentServiceObj.getStudents();
  }
  
  setShowTable(value:boolean) {
    this.showTable = value;
  }

  deleteHandler(id) {
    if(confirm("Are you sure?")) {
      this.deleteTrainee(id);
    }
  }

  deleteTrainee(id) {
    this.studentServiceObj.deleteStudent(id);
    this.students = this.studentServiceObj.getStudents();
    //Code for success toaster
    this.toastr.success("Trainee Deleted","Delete Successful");
  }

  updateTrainee(id) {
    this.router.navigate(['/update',id]);
  }

}
