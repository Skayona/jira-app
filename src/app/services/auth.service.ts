import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
