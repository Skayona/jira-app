import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from './store/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jiraApp';
  items$: Observable<IUser[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this.items$ = db.collection<IUser>('users').valueChanges();
    this.items$.subscribe(console.log);
  }
}
