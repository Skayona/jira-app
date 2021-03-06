import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../store/models/user';
import { ITask } from '../store/models/task';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JiraService {

  constructor(
    private db: AngularFirestore,
  ) { }

  createUser(user: IUser) {
    return from(this.db.collection('users').add({ ...user }));
  }

  updateUser(userId: string, value) {
    return this.db.collection('users').doc(userId).set(value);
  }

  deleteUser(userId: string) {
    return this.db.collection('users').doc(userId).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  createTask(task: ITask) {
    return from(this.db.collection('tasks').add({ ...task }));
  }

  updateTask(taskId: string, task: ITask) {
    return from(this.db.collection('tasks').doc(taskId).set(task));
  }

  searchTasksByTitle(value) {
    return this.db.collection('tasks', (ref) => ref.where('title', '>=', value)
      .where('title', '<=', value + '\uf8ff'))
      .snapshotChanges();
  }

  searchTasksByReporterId(id) {
    return this.db.collection('tasks', (ref) => ref.where('reporter.id', '>=', id)
      .where('reporter.id', '<=', id + '\uf8ff'))
      .snapshotChanges();
  }

  searchTasksByAssigneeId(id) {
    return this.db.collection('tasks', (ref) => ref.where('assignee.id', '>=', id)
      .where('assignee.id', '<=', id + '\uf8ff'))
      .snapshotChanges();
  }

  deleteTask(taskId: string) {
    return from(this.db.collection('tasks').doc(taskId).delete());
  }

  getTasks() {
    return this.db.collection('tasks').snapshotChanges();
  }

  getTask(taskId: string) {
    return this.db.collection('tasks').doc(taskId).snapshotChanges();
  }

  getUser(userId: string) {
    return this.db.collection('users').doc(userId).snapshotChanges();
  }
}
