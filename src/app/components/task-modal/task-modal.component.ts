import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { IUser } from 'src/app/store/models/user';
import { ITask } from 'src/app/store/models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IIsueType } from 'src/app/store/models/isue-type';
import { ILabel } from 'src/app/store/models/label';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  title: string;
  task: ITask;
  users: IUser[];
  user: IUser;
  asignee: IUser[];
  form: FormGroup;
  minDate: Date;
  bsConfig: {[key: string]: any};

  get issueTypes() {
    return Object.keys(IIsueType);
  }

  get issueProgress() {
    return Object.keys(ILabel);
  }

  public onClose: Subject<boolean>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
  ) {
    this.onClose = new Subject();
    this.form = fb.group({
      type: ['', Validators.required],
      label: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      assignee: ['', Validators.required],
      deadline: ['', Validators.required],
      reporter: ['', Validators.required],
    });
    this.minDate = new Date();
    this.bsConfig = {
      dateInputFormat: 'DD.MM.YYYY',
      adaptivePosition: true,
      showWeekNumbers: false,
    };

  }

  ngOnInit() {
    if (this.task) {
      const task = {
        ...this.task,
        assignee: this.task.assignee.id,
        reporter: this.task.reporter.id
      };
      this.form.patchValue(task);
    }

    if (!this.task) {
      const initFormValues = {
        label: ILabel.TO_DO,
        reporter: this.user.id,
      };

      this.form.patchValue(initFormValues);
      this.form.get('label').disable();
    }
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    this.form.get('label').enable();

    const task = {
      ...this.form.value,
      reporter: this.users.find((user) => user.id === this.form.value.reporter),
      assignee: this.users.find((user) => user.id === this.form.value.assignee),
      deadline: new Date(this.form.value.deadline).getTime(),
    };
    this.onConfirm(task);
  }

  public onConfirm(task): void {
    this.onClose.next(task);
  }
}
