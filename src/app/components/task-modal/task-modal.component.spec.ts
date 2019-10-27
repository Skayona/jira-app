import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalComponent } from './task-modal.component';
import { BsModalRef } from 'ngx-bootstrap';

describe('TaskModalComponent', () => {
  let component: TaskModalComponent;
  let fixture: ComponentFixture<TaskModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskModalComponent ],
      providers: [BsModalRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
