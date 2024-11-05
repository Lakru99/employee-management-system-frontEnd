import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MainDashboardPageComponent } from './components/main-dashboard-page/main-dashboard-page.component';
import { AddEmployeePageComponent } from './components/add-employee-page/add-employee-page.component';
import { ManageEmployeePageComponent } from './components/manage-employee-page/manage-employee-page.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
    children:[
      {path:'home', component: MainDashboardPageComponent},
      {path:'add-employee', component: AddEmployeePageComponent},
      {path:'manage-employee', component: ManageEmployeePageComponent},
      {path:'', redirectTo:'./admin/home', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
