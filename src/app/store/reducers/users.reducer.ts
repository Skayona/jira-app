import { createReducer, on } from '@ngrx/store';
import { IUser } from '../models/user';
import { GetUsers, UsersLoaded, UsersLoadingError, GetUser, UserLoaded, UserLoadingError, UsersDefault } from '../actions/users.actions';

export interface UsersReducerState {
  users: IUser[];
  user: IUser;
  loading: boolean;
  error: boolean;
}

export const initialState: UsersReducerState = {
  users: null,
  user: null,
  loading: false,
  error: false,
};

export const usersReducerState = createReducer(initialState,
  on(GetUsers, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(UsersLoaded, (state, payload) => {
    return {
      ...state,
      loading: false,
      users: payload.users
    };
  }),
  on(UsersLoadingError, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.err
    };
  }),
  on(GetUser, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(UserLoaded, (state, payload) => {
    return {
      ...state,
      loading: false,
      user: payload.user
    };
  }),
  on(UserLoadingError, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.err
    };
  }),
  on(UsersDefault, (state) => {
    return {
      ...state,
      loading: false,
      error: false
    };
  }),
);

export function usersReducer(state, action) {
  return usersReducerState(state, action);
}
