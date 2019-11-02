import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskInfoComponent } from './task-info.component';


const routes: Routes = [{
  path: '',
  component: TaskInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskInfoRoutingModule { }
