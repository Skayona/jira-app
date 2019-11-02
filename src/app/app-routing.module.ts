import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}, {
  path: 'dashboard',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
}, {
  path: 'task/:taskId',
  loadChildren: './pages/task-info/task-info.module#TaskInfoModule'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'search-results',
  component: SearchResultsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
