import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserMainDashboardComponent } from './components/user-main-dashboard/user-main-dashboard.component';
import { AddLeavePageComponent } from './components/add-leave-page/add-leave-page.component';
import { ManageLeaveComponent } from './components/manage-leave/manage-leave.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ManageTaskComponent } from './components/manage-task/manage-task.component';

const routes: Routes = [
  {path: '', component: UserDashboardComponent , children:[
    {path:'home', component:UserMainDashboardComponent},
    {path:'add-leave', component:AddLeavePageComponent},
    {path:'manage-leave', component:ManageLeaveComponent},
    {path:'add-task', component:AddTaskComponent},
    {path:'manage-task', component:ManageTaskComponent},
    {path:'', redirectTo:'/user/home', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
