import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from 'src/app/components/dashboard-nav/dashboard-nav.component';
import { DashboardTableComponent } from 'src/app/components/dashboard-table/dashboard-table.component';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';
import { TooltipModule, ModalModule } from 'ngx-bootstrap';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { TaskModalModule } from 'src/app/components/task-modal/task-modal.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardTableComponent,
    TaskCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    LoadingModule,
    TaskModalModule,
  ],
  entryComponents: []
})
export class DashboardModule { }
