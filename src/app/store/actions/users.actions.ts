import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user';

enum UsersActions {
  GetUsers = '[Get Users] Main',
  UsersLoaded = '[Users Loaded] Main',
  GetUser = '[Get User] Main',
  AddUser = '[Add User] Login',
  UserLoaded = '[User Loaded] Main',
  UsersError = '[Users Error] Main',
  UsersDefault = '[Tasks Default] Main',
}

export const GetUsers = createAction(
  UsersActions.GetUsers
);

export const UsersLoaded = createAction(
  UsersActions.UsersLoaded,
  props<{ users: IUser[] }>()
);

export const UsersError = createAction(
  UsersActions.UsersError,
  props<{ err: any }>()
);

export const GetUser = createAction(
  UsersActions.GetUser,
  props<{ id: string}>()
);

export const AddUser = createAction(
  UsersActions.AddUser,
  props<{ user: IUser}>()
);


export const UserLoaded = createAction(
  UsersActions.UserLoaded,
  props<{ user: IUser}>()
);

export const UsersDefault = createAction(
  UsersActions.UsersDefault
);
