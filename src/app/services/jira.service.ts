import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../store/models/user';
import { ITask } from '../store/models/task';
import { IIsueType } from '../store/models/isue-type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JiraService {

  constructor(
    private db: AngularFirestore,
  ) { }

  createUser(user: IUser) {
    return this.db.collection('users').add({ ...user });
  }

  updateUser(userId: string, value) {
    // value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userId).set(value);
  }

  deleteUser(userId: string) {
    return this.db.collection('users').doc(userId).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  createTask(task: ITask) {
    return of(this.db.collection('tasks').add({ ...task }));
  }

  updateTask(taskId: string, task: ITask) {
    return of(this.db.collection('tasks').doc(taskId).set(task));
  }

  searchTasksByTitle(value) {
    return this.db.collection('tasks', (ref) => ref.where('title', '>=', value)
      .where('title', '<=', value + '\uf8ff'))
      .snapshotChanges();
  }

  deleteTask(taskId: string) {
    return of(this.db.collection('tasks').doc(taskId).delete());
  }

  getTasks() {
    return this.db.collection('tasks').snapshotChanges();
    // return this.db.collection('tasks', ref => ref.orderBy('label').startAt(type)).snapshotChanges();
  }

  getTask(taskId: string) {
    return this.db.collection('tasks').doc(taskId).snapshotChanges();
  }

  getUser(userId: string) {
    return this.db.collection('users').doc(userId).snapshotChanges();
  }
}
