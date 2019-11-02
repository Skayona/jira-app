import { createAction, props } from '@ngrx/store';
import { ITask } from '../models/task';

enum TasksActions {
  GetTasks = '[Get Tasks] Dashboard',
  GetTasksByAssignee = '[Get Tasks By Assignee] Dashboard',
  GetTasksByReporter = '[Get Tasks By Reporter] Dashboard',
  TasksLoaded = '[Tasks Loaded] Dashboard',
  GetTask = '[Get Task] Task-info',
  TaskLoaded = '[Task Loaded] Task-info',
  CreateTask = '[Create Task] Mixed',
  UpdateTask = '[UpdateTask Task] Mixed',
  DeleteTask = '[DeleteTask Task] Mixed',
  TaskCreated = '[Task Created] Mixed',
  TasksError = '[Tasks Error] Dashboard',
  TasksDefault = '[Tasks Default] Mixed',
}

export const GetTasks = createAction(
  TasksActions.GetTasks
);

export const GetTasksByAssignee = createAction(
  TasksActions.GetTasksByAssignee,
  props<{ assigneeId: string }>()
);

export const GetTasksByReporter = createAction(
  TasksActions.GetTasksByReporter,
  props<{ reporterId: string }>()
);

export const TasksLoaded = createAction(
  TasksActions.TasksLoaded,
  props<{ tasks: ITask[] }>()
);

export const GetTask = createAction(
  TasksActions.GetTask,
  props<{ id: string}>()
);

export const TaskLoaded = createAction(
  TasksActions.TaskLoaded,
  props<{ task: ITask}>()
);

export const CreateTask = createAction(
  TasksActions.CreateTask,
  props<{ task: ITask}>()
);

export const UpdateTask = createAction(
  TasksActions.UpdateTask,
  props<{ taskId: string; task: ITask}>()
);

export const DeleteTask = createAction(
  TasksActions.DeleteTask,
  props<{ taskId: string}>()
);


export const TasksError = createAction(
  TasksActions.TasksError,
  props<{ err: any}>()
);

export const TasksDefault = createAction(
  TasksActions.TasksDefault
);
