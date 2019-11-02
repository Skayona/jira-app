import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/store/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() { }

  login() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/']);
    });
  }

}
