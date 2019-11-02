import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/store/models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { CreateTask, GetTasksByAssignee, GetTasksByReporter, GetTasks } from 'src/app/store/actions/tasks.actions';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/store/models/task';
import { JiraService } from 'src/app/services/jira.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {
  @Input() users: IUser[];
  @Input() user: IUser;

  modalRef: BsModalRef;
  searchQuery: FormControl;
  searchResults$: Observable<ITask[]>;
  searchByAssignee: FormControl;
  searchByReporter: FormControl;

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>,
    private jiraService: JiraService
  ) {
    this.searchQuery = new FormControl('');
    this.searchByAssignee = new FormControl('');
    this.searchByReporter = new FormControl('');
  }

  ngOnInit() {
    this.searchResults$ = this.searchQuery.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.jiraService.searchTasksByTitle(query)),
      map((res) => res.map((item) => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        } as ITask;
      }))
    );

    this.searchByAssignee.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(Boolean),
    ).subscribe((id: string) => {
      this.getTaskByAssignee(id);
    });

    this.searchByReporter.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(Boolean),
    ).subscribe((id: string) => {
      this.getTaskByReporter(id);
    });
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

  clearSearchResults() {
    this.searchQuery.setValue('');
  }

  getTaskByAssignee(assigneeId: string) {
    this.searchByReporter.setValue('');
    this.store.dispatch(GetTasksByAssignee({ assigneeId }));
  }

  getTaskByReporter(reporterId: string) {
    this.searchByAssignee.setValue('');
    this.store.dispatch(GetTasksByReporter({ reporterId }));
  }

  clearFilters() {
    this.searchByReporter.setValue('');
    this.searchByAssignee.setValue('');
    this.store.dispatch(GetTasks());
  }

}
