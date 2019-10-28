import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { JiraService } from 'src/app/services/jira.service';
import { ITask } from '../models/task';
import { TasksLoaded, GetTasks, TasksLoadingError, GetTask, TaskLoaded, TaskLoadingError } from '../actions/tasks.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectTasks } from '..';


@Injectable()
export class JiraEffects {
  getTasks$ = createEffect(() => this.actions$.pipe(
    ofType(GetTasks.type),
    mergeMap(() => this.store.select(selectTasks)),
    switchMap((storedTasks) => {
      if (storedTasks.length) {
        return of(TasksLoaded({ tasks: storedTasks}));
      }
      return this.jiraService.getTasks().pipe(
          map((res: any[]) => {
            console.log(1);

            const tasks: ITask[] = res.map((item) => {
              return {
                ...item.payload.doc.data(),
                id: item.payload.doc.id
              };
            });
            return TasksLoaded({ tasks });
          }),
          catchError((err) => of(TasksLoadingError(err)))
        );
      })
    )
  );


  getTask$ = createEffect(() => this.actions$.pipe(
    ofType(GetTask.type),
    mergeMap(({ id }) => this.jiraService.getTask(id)
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
    private store: Store<AppState>,
  ) {}
}

