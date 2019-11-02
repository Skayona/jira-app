import { createSelector } from '@ngrx/store';
import { TasksReducerState, tasksReducer } from './reducers/tasks.reducers';
import { TasksEffects } from './effects/tasks.effects';
import { UsersReducerState, usersReducer } from './reducers/users.reducer';
import { UsersEffect } from './effects/users.effects';

export interface AppState {
  tasksState: TasksReducerState;
  usersState: UsersReducerState;
}

export const appEffects = [
  TasksEffects, UsersEffect
];

export const appState = {
  tasksState: tasksReducer,
  usersState: usersReducer,
};

const selectTasksState = (state: AppState) => state.tasksState;
const selectUsersState = (state: AppState) => state.usersState;


// tasks
export const selectTasks = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.tasks
);

export const selectTask = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.task
);

export const selectTasksError = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.error
);

export const selectTasksLoading = createSelector(
  selectTasksState,
  (state: TasksReducerState) => state.loading
);

// users
export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersReducerState) => state.users
);

export const selectUser = createSelector(
  selectUsersState,
  (state: UsersReducerState) => state.user
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state: UsersReducerState) => state.error
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state: UsersReducerState) => state.loading
);

