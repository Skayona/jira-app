import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { IUser } from '../store/models/user';
import { Store } from '@ngrx/store';
import { AppState, selectUsers } from '../store';
import { GetUsers, AddUser, GetUser } from '../store/actions/users.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  users$: Observable<IUser[]>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
  ) {
    store.dispatch(GetUsers());
    this.users$ = store.select(selectUsers);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    return this.authService.afAuth.idTokenResult.pipe(
      map((res) => {
        if (res) {
          this.users$.pipe(
            filter(Boolean),
            take(1),
          ).subscribe((users: IUser[]) => {
            const newUser = {
              displayName: res.claims.name,
              uid: res.claims.user_id
            };

            const userExist = users.find((u) => u.uid === newUser.uid);
            if (!userExist) {
              this.store.dispatch(AddUser({ user: newUser }));
            } else {
              this.store.dispatch(GetUser({ id: userExist.id }));
            }
          });
          return true;
        }
        this.router.navigate(['login']);
        return false;
      })
    );

  }

}
