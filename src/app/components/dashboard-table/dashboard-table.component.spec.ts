import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTableComponent } from './dashboard-table.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { LoadingComponent } from '../loading/loading.component';
import { TooltipModule } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardTableComponent', () => {
  let component: DashboardTableComponent;
  let fixture: ComponentFixture<DashboardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTableComponent, TaskCardComponent, LoadingComponent ],
      imports: [ TooltipModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
