import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouteConfigLoadStart, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { IUser } from 'src/app/store/models/user';
import { Observable } from 'rxjs';
import { AppState, selectUser } from 'src/app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLogout: boolean;
  user$: Observable<IUser>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.user$ = store.select(selectUser);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e: NavigationEnd) => e.urlAfterRedirects)
    ).subscribe((urlAfterRedirects) => {
      this.showLogout = !(urlAfterRedirects.includes('login'));
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }

}
