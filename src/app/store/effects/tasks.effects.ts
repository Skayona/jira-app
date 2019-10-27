import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JiraService } from 'src/app/services/jira.service';
import { ITask } from '../models/task';
import { TasksLoaded, GetTasks, TasksLoadingError, GetTask, TaskLoaded, TaskLoadingError } from '../actions/tasks.actions';
import { of } from 'rxjs';


@Injectable()
export class JiraEffects {
  @Effect()
  getTasks$ = createEffect(() => this.actions$.pipe(
    ofType(GetTasks),
    mergeMap(() => this.jiraService.getTasks()
      .pipe(
        map((res: any[]) => {
          const tasks: ITask[] = res.map((item) => {
            return {
              ...item.payload.doc.data(),
              id: item.payload.doc.id
            };
          });
          return TasksLoaded({ tasks });
        }),
        catchError((err) => of(TasksLoadingError(err)))
      ))
    )
  );

  @Effect()
  getTask$ = createEffect(() => this.actions$.pipe(
    ofType(GetTask),
    mergeMap((payload) => this.jiraService.getTask(payload.id)
      .pipe(
        map((res: any) => {
          const task = {
            ...res.payload.data(),
            id: res.payload.id
          };
          return TaskLoaded({ task });
        }),
        catchError((err) => of(TaskLoadingError(err)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private jiraService: JiraService,
  ) {}
}

