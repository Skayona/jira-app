import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from 'src/app/components/dashboard-nav/dashboard-nav.component';
import { DashboardTableComponent } from 'src/app/components/dashboard-table/dashboard-table.component';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, DashboardNavComponent, DashboardTableComponent, TaskCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
