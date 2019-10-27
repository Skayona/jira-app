import { createReducer, on } from '@ngrx/store';
import { ITask } from '../models/task';
import { GetTasks, TasksLoaded, TasksLoadingError, GetTask, TaskLoaded, TaskLoadingError } from '../actions/tasks.actions';

export interface TasksReducerState {
  tasks: ITask[];
  task: ITask;
  loading: boolean;
  error: boolean;
}

export const initialState: TasksReducerState = {
  tasks: [],
  task: null,
  loading: false,
  error: false,
};

export const tasksReducerState = createReducer(initialState,
  on(GetTasks, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(TasksLoaded, (state, payload) => {
    return {
      ...state,
      loading: false,
      tasks: payload.tasks
    };
  }),
  on(TasksLoadingError, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.err
    };
  }),
  on(GetTask, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(TaskLoaded, (state, payload) => {
    return {
      ...state,
      loading: false,
      task: payload.task
    };
  }),
  on(TaskLoadingError, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.err
    };
  }),
);

export function tasksReducer(state, action) {
  return tasksReducerState(state, action);
}
