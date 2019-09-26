import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { TraineeOverviewComponent } from './components/trainee-overview/trainee-overview.component';
import { TraineeDetailsComponent } from './components/trainee-details/trainee-details.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';


const childRoutes = [
  {
    path:'',
    component:TraineeOverviewComponent
  },
  {
    path:'details/:id',
    component:TraineeDetailsComponent
  },
  {
    path:'add',
    component:AddUpdateComponent
  },
  {
    path:'update/:id',
    component:AddUpdateComponent
  },
]
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:SidebarComponent,
    canActivate:[AuthService],
    children: childRoutes
  },
  {
    path: '**',
    redirectTo:'/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
