import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from 'src/app/components/dashboard-nav/dashboard-nav.component';
import { DashboardTableComponent } from 'src/app/components/dashboard-table/dashboard-table.component';
import { TaskCardComponent } from 'src/app/components/task-card/task-card.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { TooltipModule, BsModalService } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from 'src/app/store';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DashboardNavComponent,
        DashboardTableComponent,
        TaskCardComponent,
        LoadingComponent,
        SearchResultsComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TooltipModule,
        RouterTestingModule,
        StoreModule.forRoot(appState),
      ],
      providers: [
        Store,
        { provide: BsModalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
