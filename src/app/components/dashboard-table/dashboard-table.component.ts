import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/store/models/task';
import { ILabel } from 'src/app/store/models/label';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
  @Input() tasks: ITask[] = [];
  @Input() loading: boolean;
  @Input() error: any;

  constructor() { }

  ngOnInit() {
  }

  getTasks(tasks, type: ILabel) {
    return tasks && tasks.filter((task) => task.label === type);
  }

}
