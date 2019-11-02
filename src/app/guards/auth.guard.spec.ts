import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from '../store';
import { AngularFireAuth } from '@angular/fire/auth';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot(appState) ],
      providers: [AuthGuard, Store, AngularFireAuth]
    });
  });

  // it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
