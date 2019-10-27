import { createSelector } from '@ngrx/store';
import { TasksReducerState, tasksReducer } from './reducers/jira.reducers';
import { JiraEffects } from './effects/tasks.effects';

export interface AppState {
  tasksState: TasksReducerState;
}

export const appEffects = [
  JiraEffects
];

export const appState = {
  tasksState: tasksReducer
};

const selectTasksState = (state: AppState) => state.tasksState;

export const selectTasks = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.tasks
);

export const selectTasksError = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.error
);

export const selectTasksLoading = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.loading
);


export const selectTask = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.task
);
