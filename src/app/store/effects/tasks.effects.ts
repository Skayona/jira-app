import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, pluck, take } from 'rxjs/operators';
import { JiraService } from 'src/app/services/jira.service';
import { ITask } from '../models/task';
import {
  TasksLoaded,
  GetTasks,
  GetTask,
  TaskLoaded,
  TasksDefault,
  CreateTask,
  TasksError,
  UpdateTask,
  DeleteTask,
  GetTasksByAssignee,
  GetTasksByReporter
} from '../actions/tasks.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '..';


@Injectable()
export class TasksEffects {
  getTasks$ = createEffect(() => this.actions$.pipe(
    ofType(GetTasks.type),
    switchMap((storedTasks) => {
      return this.jiraService.getTasks().pipe(
          map((res: any[]) => {
            const tasks: ITask[] = res.map((item) => {
              return {
                ...item.payload.doc.data(),
                id: item.payload.doc.id
              };
            });
            return TasksLoaded({ tasks });
          }),
          catchError((err) => of(TasksError(err)))
        );
      })
    )
  );

  getTasksByAssignee$ = createEffect(() => this.actions$.pipe(
    ofType(GetTasksByAssignee.type),
    mergeMap(({ assigneeId }) => {
      return this.jiraService.searchTasksByAssigneeId(assigneeId).pipe(
          map((res: any[]) => {
            const tasks: ITask[] = res.map((item) => {
              return {
                ...item.payload.doc.data(),
                id: item.payload.doc.id
              };
            });
            return TasksLoaded({ tasks });
          }),
          catchError((err) => of(TasksError(err)))
        );
      })
    )
  );

  getTasksByReporter$ = createEffect(() => this.actions$.pipe(
    ofType(GetTasksByReporter.type),
    switchMap(({ reporterId }) => {
      return this.jiraService.searchTasksByReporterId(reporterId).pipe(
          map((res: any[]) => {
            const tasks: ITask[] = res.map((item) => {
              return {
                ...item.payload.doc.data(),
                id: item.payload.doc.id
              };
            });
            return TasksLoaded({ tasks });
          }),
          catchError((err) => of(TasksError(err)))
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
        catchError((err) => of(TasksError(err)))
      ))
    )
  );

  createTask$ = createEffect(() => this.actions$.pipe(
    ofType(CreateTask.type),
    mergeMap(({ task }) => this.jiraService.createTask(task)
      .pipe(
        map(() => TasksDefault()),
        catchError((err) => of(TasksError(err)))
      ))
    )
  );

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateTask.type),
    mergeMap(({ taskId, task }) => this.jiraService.updateTask(taskId, task)
      .pipe(
        map(() => TasksDefault()),
        catchError((err) => of(TasksError(err)))
      ))
    )
  );

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteTask.type),
    mergeMap(({ taskId }) => this.jiraService.deleteTask(taskId)
      .pipe(
        map(() => TasksDefault()),
        catchError((err) => of(TasksError(err)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private jiraService: JiraService,
    private store: Store<AppState>,
  ) {}
}

