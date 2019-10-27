import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  title: string;

  public onClose: Subject<boolean>;

  constructor(
    public bsModalRef: BsModalRef,
  ) {
    this.onClose = new Subject();
  }

  ngOnInit() {
  }

  save() {
    this.onConfirm();
  }

  public onConfirm(): void {
    this.onClose.next(true);
  }
}
