import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../store/models/user';
import { ITask } from '../store/models/task';
import { IIsueType } from '../store/models/isue-type';

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
    return this.db.collection('tasks').add({ ...task });
  }

  updateTask(taskId: string, value) {
    return this.db.collection('tasks').doc(taskId).set(value);
  }

  // searchUsers(searchValue){
  //   return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }

  deleteTask(taskId: string) {
    return this.db.collection('tasks').doc(taskId).delete();
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
