import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule ,Routes, Router} from "@angular/router";
import { StudentsService } from '../../services/students.service';
import { Student } from '../../mock-students';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class TraineeDetailsComponent implements OnInit {
  id:number;
  student:Student;
  constructor(private studentServiceObj:StudentsService, private route: ActivatedRoute, private router:Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if(this.id) {
      this.student = this.studentServiceObj.getStudents(this.id)[0];
    }
  }

}
