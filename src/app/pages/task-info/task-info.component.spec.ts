import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoComponent } from './task-info.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { TaskFullComponent } from 'src/app/components/task-full/task-full.component';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from 'src/app/store';
import {  of } from 'rxjs';

describe('TaskInfoComponent', () => {
  let component: TaskInfoComponent;
  let fixture: ComponentFixture<TaskInfoComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      params: of({ taskId: 1 })
    };

    TestBed.configureTestingModule({
      declarations: [ TaskInfoComponent, LoadingComponent, TaskFullComponent ],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, { provide: BsModalService }, Store ],
      imports: [StoreModule.forRoot(appState)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
