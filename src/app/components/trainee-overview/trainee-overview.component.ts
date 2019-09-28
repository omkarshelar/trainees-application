import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { routerTransition } from '../../services/config.service';
import { Student } from '../../mock-students';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainee-overview',
  templateUrl: './trainee-overview.component.html',
  styleUrls: ['./trainee-overview.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TraineeOverviewComponent implements OnInit {
  students:Student[];
  searchQuery = "";
  constructor(private studentServiceObj:StudentsService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.students = this.studentServiceObj.getStudents();
  }

  /*
   * Show confirm prompt. If user confirms call deleteTrainee method.
   */
  deleteHandler(id) {
    if(confirm("Are you sure?")) {
      this.deleteTrainee(id);
    }
  }

  /*
   * Uses the student service to delete student.
   */
  deleteTrainee(id) {
    this.studentServiceObj.deleteStudent(id);
    this.students = this.studentServiceObj.getStudents();
    this.toastr.success("Trainee Deleted","Delete Successful");
  }
  
  updateTrainee(id) {
    this.router.navigate(['/update',id]);
  }

  /*
   * Shows toaster when the table row is clicked.
   */
  showClickToaster(student:Student) {
    this.toastr.success("Details for "+student.firstName,"Trainee Details Fetched");
  }
}
