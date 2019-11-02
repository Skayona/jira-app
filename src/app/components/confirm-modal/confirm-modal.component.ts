import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
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
