import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}, {
  path: 'dashboard',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
  canActivate: [AuthGuard]
}, {
  path: 'task/:taskId',
  loadChildren: './pages/task-info/task-info.module#TaskInfoModule',
  canActivate: [AuthGuard]
}, {
  path: 'login',
  loadChildren: './pages/login/login.module#LoginModule',
  canActivate: [LoginGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
