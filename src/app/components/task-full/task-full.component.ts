import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/store/models/task';
import { ILabel } from 'src/app/store/models/label';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-task-full',
  templateUrl: './task-full.component.html',
  styleUrls: ['./task-full.component.scss']
})
export class TaskFullComponent implements OnInit {
  @Input() task: ITask;

  modalRef: BsModalRef;
  label: typeof ILabel = ILabel;

  constructor(
    private modalService: BsModalService
  ) { }

  edit() {
    const initialState = {
      task: this.task,
      title: 'Edit task',
    };
    this.modalRef = this.modalService.show(TaskModalComponent,
      { initialState }
    );
    this.modalRef.content.onClose.subscribe((result) => {
      console.log('results', result);
      if (result) {
        this.modalRef.hide();
      }
    });
  }

  delete() {
    this.modalRef = this.modalService.show(ConfirmModalComponent);
    this.modalRef.content.onClose.subscribe((result) => {
      console.log('results', result);
      if (result) {
        this.modalRef.hide();
      }
    });

  }

  ngOnInit() {
  }

}
