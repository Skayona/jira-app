import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { TaskInfoComponent } from './pages/task-info/task-info.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: DashboardComponent,
    }, {
      path: 'task/:taskId',
      component: TaskInfoComponent,
    }
  ]
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
