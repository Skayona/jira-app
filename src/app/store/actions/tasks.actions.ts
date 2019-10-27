import { createAction, props, union } from '@ngrx/store';
import { ITask } from '../models/task';

enum TasksActions {
  GetTasks = '[Get Tasks] Dashboard',
  TasksLoaded = '[Tasks Loaded] Dashboard',
  TasksLoadingError = '[Tasks Loading Error] Dashboard',
  GetTask = '[Get Task] Dashboard',
  TaskLoaded = '[Task Loaded] Dashboard',
  TaskLoadingError = '[Task Loading Error] Dashboard',
}

export const GetTasks = createAction(
  TasksActions.GetTasks
);

export const TasksLoaded = createAction(
  TasksActions.TasksLoaded,
  props<{ tasks: ITask[] }>()
);

export const TasksLoadingError = createAction(
  TasksActions.TasksLoadingError,
  props<{ err: any }>()
);

export const GetTask = createAction(
  TasksActions.GetTask,
  props<{ id: string}>()
);

export const TaskLoaded = createAction(
  TasksActions.TaskLoaded,
  props<{ task: ITask}>()
);

export const TaskLoadingError = createAction(
  TasksActions.TaskLoadingError,
  props<{ err: any}>()
);
