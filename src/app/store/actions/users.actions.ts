import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user';

enum UsersActions {
  GetUsers = '[Get Users] Main',
  UsersLoaded = '[Users Loaded] Main',
  UsersLoadingError = '[Users Loading Error] Main',
  GetUser = '[Get User] Main',
  UserLoaded = '[User Loaded] Main',
  UserLoadingError = '[User Loading Error] Main',
  UsersDefault = '[Tasks Default] Main',
}

export const GetUsers = createAction(
  UsersActions.GetUsers
);

export const UsersLoaded = createAction(
  UsersActions.UsersLoaded,
  props<{ users: IUser[] }>()
);

export const UsersLoadingError = createAction(
  UsersActions.UsersLoadingError,
  props<{ err: any }>()
);

export const GetUser = createAction(
  UsersActions.GetUser,
  props<{ id: string}>()
);

export const UserLoaded = createAction(
  UsersActions.UserLoaded,
  props<{ user: IUser}>()
);

export const UserLoadingError = createAction(
  UsersActions.UserLoadingError,
  props<{ err: any}>()
);

export const UsersDefault = createAction(
  UsersActions.UsersDefault
);
