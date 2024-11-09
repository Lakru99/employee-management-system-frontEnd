import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AddLeavePageComponent } from './components/add-leave-page/add-leave-page.component';
import { UserMainDashboardComponent } from './components/user-main-dashboard/user-main-dashboard.component';
import { UserSideMenuComponent } from './components/user-side-menu/user-side-menu.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserMainDashboardComponent,
    UserSideMenuComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
