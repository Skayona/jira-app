import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectTasks, selectTasksLoading, selectTasksError } from 'src/app/store';
import { GetTasks } from 'src/app/store/actions/tasks.actions';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/store/models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks$: Observable<ITask[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    store.dispatch(GetTasks());
    this.tasks$ = store.select(selectTasks);
    this.loading$ = store.select(selectTasksLoading);
    this.error$ = store.select(selectTasksError);
  }

  ngOnInit() { }

}
