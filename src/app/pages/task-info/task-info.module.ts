import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskInfoRoutingModule } from './task-info-routing.module';
import { TaskInfoComponent } from './task-info.component';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { TaskFullComponent } from 'src/app/components/task-full/task-full.component';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { TaskModalModule } from 'src/app/components/task-modal/task-modal.module';


@NgModule({
  declarations: [
    TaskInfoComponent,
    TaskFullComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    TaskInfoRoutingModule,
    ModalModule.forRoot(),
    LoadingModule,
    TaskModalModule,
  ],
  entryComponents: [
    ConfirmModalComponent,
  ]
})
export class TaskInfoModule { }
