import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalComponent } from './task-modal.component';
import { BsModalRef, DatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('TaskModalComponent', () => {
  let component: TaskModalComponent;
  let fixture: ComponentFixture<TaskModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskModalComponent ],
      imports: [ FormsModule, ReactiveFormsModule, DatepickerModule.forRoot() ],
      providers: [BsModalRef, FormBuilder, BsDatepickerConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
