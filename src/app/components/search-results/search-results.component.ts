import { Component, OnInit, HostListener, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/store/models/task';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: ITask[];

  @Output() clearResults: EventEmitter<any> = new EventEmitter();

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event.target'])
  clickout(event) {
    if (!this.elRef.nativeElement.contains(event)) {
      this.clearResults.emit();
    }
  }
}
