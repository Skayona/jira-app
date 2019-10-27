import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from './store/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // private db: AngularFirestore,
  ) {
    // this.items$ = db.collection<IUser>('users').valueChanges();
    // this.db.collection<IUser>('users').snapshotChanges().subscribe(console.log);
    // const a = this.db.collection('users').snapshotChanges();

    // a.subscribe((res) => {
    //   res.forEach((r) => {
    //     console.log(r.payload.doc.data());
    //   });
    // });
  }
}
