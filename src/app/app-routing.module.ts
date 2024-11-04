import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { ManageEmployeePageComponent } from './pages/manage-employee-page/manage-employee-page.component';
import { MainDashboardPageComponent } from './pages/main-dashboard-page/main-dashboard-page.component';


const routes: Routes = [
  {
    path: "",
    component: MainDashboardPageComponent
  },
  {
    path: "add-employee",
    component: AddEmployeePageComponent
  },
  {
      path:"manage-employee",
      component: ManageEmployeePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
