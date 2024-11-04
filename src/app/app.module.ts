import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { ManageEmployeePageComponent } from './pages/manage-employee-page/manage-employee-page.component';
import { MainDashboardPageComponent } from './pages/main-dashboard-page/main-dashboard-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeePageComponent,
    ManageEmployeePageComponent,
    MainDashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, CommonModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
