import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { JiraService } from './services/jira.service';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { TaskInfoComponent } from './pages/task-info/task-info.component';

import { ModalModule, TooltipModule } from 'ngx-bootstrap';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appState, appEffects } from './store';
import { LoadingComponent } from './components/loading/loading.component';
import { TaskFullComponent } from './components/task-full/task-full.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SearchResultsComponent,
    TaskCardComponent,
    TaskInfoComponent,
    DashboardNavComponent,
    DashboardTableComponent,
    LoadingComponent,
    TaskFullComponent,
    ConfirmModalComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot(appEffects),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [JiraService],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmModalComponent,
    TaskModalComponent,
  ]
})
export class AppModule { }
