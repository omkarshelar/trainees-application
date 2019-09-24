import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { TraineeOverviewComponent } from './trainee-overview/trainee-overview.component';
import { TraineeDetailsComponent } from './trainee-details/trainee-details.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:SidebarComponent,
    canActivate:[AuthService],
    children:[
      {path:'',component:TraineeOverviewComponent},
      {path:':id',component:TraineeDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
