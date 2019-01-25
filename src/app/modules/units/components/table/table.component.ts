import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Unit } from 'src/app/modules/core/interfaces/unit.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() units: Unit[];
  @Output() unitSelectedEvent: EventEmitter<Unit> = new EventEmitter<Unit>();

  constructor(
    
  ) { }

  ngOnInit() {
    
  }

  unitSelected(e, unit) {
    this.unitSelectedEvent.emit(unit);
  }

}
