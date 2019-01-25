import { Component, OnInit, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { Filter } from 'src/app/modules/core/interfaces/filter.model';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html'
})
export class PillsComponent implements OnInit {
  @HostBinding('class.c-pills') true;

  @Input() filters: Filter[];
  @Input() selectedFilter: Filter;
  @Output() filterSelectedEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit() {}

  filterSelected(e, filter) {
    this.filterSelectedEvent.emit(filter);
  }

}
