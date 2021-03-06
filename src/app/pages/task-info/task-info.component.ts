import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITask } from 'src/app/store/models/task';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { AppState, selectTask, selectTasksLoading, selectUsers } from 'src/app/store';
import { Store } from '@ngrx/store';
import { GetTask } from 'src/app/store/actions/tasks.actions';
import { IUser } from 'src/app/store/models/user';
import { GetUsers } from 'src/app/store/actions/users.actions';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit, OnDestroy {
  alive$: Subject<any> = new Subject();
  task$: Observable<ITask>;
  users$: Observable<IUser[]>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    store.dispatch(GetUsers());
    this.users$ = store.select(selectUsers);
    this.route.params.pipe(
      takeUntil(this.alive$)
    ).subscribe(({ taskId }) => {
      store.dispatch(GetTask({ id: taskId }));
    });
    this.task$ = store.select(selectTask);
    this.loading$ = store.select(selectTasksLoading);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive$.next();
    this.alive$.complete();
  }

}
