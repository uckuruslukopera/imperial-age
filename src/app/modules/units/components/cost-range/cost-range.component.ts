import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/modules/core/interfaces/filter.model';

@Component({
  selector: 'app-cost-range',
  templateUrl: './cost-range.component.html'
})
export class CostRangeComponent implements OnInit {
  @HostBinding('class.c-cost-range') true;

  @Input() filters: Filter[];
  @Input() selectedFilters: Filter[];
  @Output() filterSelectedEvent: EventEmitter<Filter> = new EventEmitter<Filter>();
  @Output() filterDeselectedEvent: EventEmitter<Filter> = new EventEmitter<Filter>();
  @Output() sliderChangedEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit() {
  }

  filterChecked(e, filter) {
    if (e && e.target) {
      if (e.target.checked) {
        this.filterSelectedEvent.emit(filter);
      } else {
        this.filterDeselectedEvent.emit(filter);
      }
    }
  }

  sliderChanged(e, filter) {
    if (e && e.target) {
      filter.filterValue = e.target.value;
      this.sliderChangedEvent.emit(filter);
    }
  }
}
