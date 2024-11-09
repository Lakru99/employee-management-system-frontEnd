import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeePageComponent } from './modules/admin/components/add-employee-page/add-employee-page.component';
import { ManageEmployeePageComponent } from './modules/admin/components/manage-employee-page/manage-employee-page.component';
import { MainDashboardPageComponent } from './modules/admin/components/main-dashboard-page/main-dashboard-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddLeavePageComponent } from './modules/user/components/add-leave-page/add-leave-page.component';
import { ManageLeaveComponent } from './modules/user/components/manage-leave/manage-leave.component';
import { AddTaskComponent } from './modules/user/components/add-task/add-task.component';
import { ManageTaskComponent } from './modules/user/components/manage-task/manage-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeePageComponent,
    ManageEmployeePageComponent,
    MainDashboardPageComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AddLeavePageComponent,
    ManageLeaveComponent,
    AddTaskComponent,
    ManageTaskComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}