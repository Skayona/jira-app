import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFullComponent } from './task-full.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from 'src/app/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaskFullComponent', () => {
  let component: TaskFullComponent;
  let fixture: ComponentFixture<TaskFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFullComponent ],
      imports: [StoreModule.forRoot(appState), RouterTestingModule],
      providers: [{ provide: BsModalService }, Store, BsModalRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
