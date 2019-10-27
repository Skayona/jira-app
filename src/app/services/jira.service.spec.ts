import { TestBed } from '@angular/core/testing';

import { JiraService } from './jira.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../store/models/user';
import { from } from 'rxjs';

describe('JiraService', () => {
  const input: IUser[] = [
    { familyName: 'Snow', name: 'John' }
  ];

  const data = from(input);

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  const AngularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: AngularFirestore, useValue: AngularFirestoreStub } ],
  }));

  it('should be created', () => {
    const service: JiraService = TestBed.get(JiraService);
    expect(service).toBeTruthy();
  });
});
