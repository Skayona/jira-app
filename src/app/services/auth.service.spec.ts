import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { StoreModule, Store } from '@ngrx/store';
import { appState } from '../store';
import { AngularFireAuth } from '@angular/fire/auth';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ StoreModule.forRoot(appState) ],
    providers: [ Store, AngularFireAuth ]
  }));

  // it('should be created', () => {
  //   const service: AuthService = TestBed.get(AuthService);
  //   expect(service).toBeTruthy();
  // });
});
