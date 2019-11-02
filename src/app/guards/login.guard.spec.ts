import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { AngularFireAuth } from '@angular/fire/auth';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard, AngularFireAuth]
    });
  });

  // it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
