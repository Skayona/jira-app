import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, pluck, take } from 'rxjs/operators';
import { JiraService } from 'src/app/services/jira.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import {
  GetUsers,
  UsersDefault,
  UsersLoaded,
  GetUser,
  UserLoaded,
  UsersError,
  AddUser,
} from '../actions/users.actions';
import { IUser } from '../models/user';


@Injectable()
export class UsersEffect {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(GetUsers.type),
    switchMap((storedUsers) => {
      return this.jiraService.getUsers().pipe(
          map((res: any[]) => {
            const users: IUser[] = res.map((item) => {
              return {
                ...item.payload.doc.data(),
                id: item.payload.doc.id
              };
            });
            return UsersLoaded({ users });
          }),
          catchError((err) => of(UsersError(err)))
        );
      })
    )
  );


  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(GetUser.type),
    mergeMap(({ id }) => this.jiraService.getUser(id)
      .pipe(
        map((res: any) => {
          const user = {
            ...res.payload.data(),
            id: res.payload.id
          };
          return UserLoaded({ user });
        }),
        catchError((err) => of(UsersError(err)))
      ))
    )
  );

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(AddUser.type),
    mergeMap(({ user }) => this.jiraService.createUser(user)
      .pipe(
        map(({ id }) => GetUser({ id })),
        catchError((err) => of(UsersError(err)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private jiraService: JiraService,
    private store: Store<AppState>,
  ) {}
}

