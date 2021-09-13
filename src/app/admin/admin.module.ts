import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    ProfileComponent,
  ],
  providers: [DashboardService],
})
export class AdminModule { }
