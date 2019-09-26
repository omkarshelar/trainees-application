import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authServiceObj:AuthService, private router:Router, private studentServiceObj:StudentsService, private toastr: ToastrService) { 
    console.log("Sidebar loaded");
    
  }

  ngOnInit() {
  }

  logoutUser() {
    this.authServiceObj.logoutCurrentUser();
    this.studentServiceObj.deleteStudentsDB();
    this.toastr.success('Logout successful', 'Logged Out');
    this.router.navigate(['/login']);
  }

}
