import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/store/models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { CreateTask } from 'src/app/store/actions/tasks.actions';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {
  @Input() users: IUser[];
  @Input() user: IUser;

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  createTask() {
    const initialState = {
      title: 'Create task',
      users: this.users,
      reporter: this.user
    };
    this.modalRef = this.modalService.show(TaskModalComponent,
      { initialState }
    );

    this.modalRef.content.onClose.subscribe((task) => {
      if (task) {
        this.store.dispatch(CreateTask({ task }));
        this.modalRef.hide();
      }
    });
  }

}
