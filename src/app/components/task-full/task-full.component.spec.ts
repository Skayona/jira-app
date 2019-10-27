import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFullComponent } from './task-full.component';
import { BsModalService } from 'ngx-bootstrap';

describe('TaskFullComponent', () => {
  let component: TaskFullComponent;
  let fixture: ComponentFixture<TaskFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFullComponent ],
      providers: [{ provide: BsModalService }]
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
