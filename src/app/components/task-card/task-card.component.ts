import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/store/models/task';
import { IIsueType } from 'src/app/store/models/isue-type';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: ITask;

  constructor() { }

  ngOnInit() {
  }

  getCardClass(type: IIsueType) {
    return {
      bug: type === IIsueType.BUG,
      feature: type === IIsueType.FEATURE,
      improvment: type === IIsueType.IMPROVMENT,
      story: type === IIsueType.STORY,
      task: type === IIsueType.TASK,
    };
  }
}
