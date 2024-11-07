import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {
    path: 'admin',
    canActivate:[authGuard] ,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate:[authGuard] ,
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {path: '**', component: NotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
