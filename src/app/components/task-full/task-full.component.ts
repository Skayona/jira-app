import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/store/models/task';
import { ILabel } from 'src/app/store/models/label';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { UpdateTask, DeleteTask } from 'src/app/store/actions/tasks.actions';
import { IUser } from 'src/app/store/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-full',
  templateUrl: './task-full.component.html',
  styleUrls: ['./task-full.component.scss']
})
export class TaskFullComponent implements OnInit {
  @Input() task: ITask;
  @Input() users: IUser[];

  modalRef: BsModalRef;
  label: typeof ILabel = ILabel;

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  edit() {
    const initialState = {
      task: this.task,
      title: 'Edit task',
      users: this.users
    };
    this.modalRef = this.modalService.show(TaskModalComponent,
      { initialState }
    );
    this.modalRef.content.onClose.subscribe((task) => {
      if (task) {
        const taskId = this.task.id;
        this.store.dispatch(UpdateTask({ taskId, task }));
        this.modalRef.hide();
      }
    });
  }

  delete() {
    this.modalRef = this.modalService.show(ConfirmModalComponent);
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.store.dispatch(DeleteTask({ taskId: this.task.id }));
        this.modalRef.hide();
        this.router.navigate(['/']);
      }
    });

  }

  ngOnInit() {
  }

}
