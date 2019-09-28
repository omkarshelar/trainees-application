import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/home/app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TraineeOverviewComponent } from './components/trainee-overview/trainee-overview.component';
import { TraineeDetailsComponent } from './components/trainee-details/trainee-details.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonePipe } from './pipes/phone.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TraineeOverviewComponent,
    TraineeDetailsComponent,
    AddUpdateComponent,
    PhonePipe,
    SearchPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
