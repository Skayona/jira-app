import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavComponent } from './dashboard-nav.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from 'src/app/store';
import { BsModalService } from 'ngx-bootstrap';

describe('DashboardNavComponent', () => {
  let component: DashboardNavComponent;
  let fixture: ComponentFixture<DashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardNavComponent,
        SearchResultsComponent,
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
    fixture = TestBed.createComponent(DashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
