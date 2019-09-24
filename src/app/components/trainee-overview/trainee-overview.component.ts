import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainee-overview',
  templateUrl: './trainee-overview.component.html',
  styleUrls: ['./trainee-overview.component.css']
})
export class TraineeOverviewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
