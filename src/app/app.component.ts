import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { LoadUnits } from './store/actions/unit.actions';
import { LoadAgeFilters, LoadCostFilters, SelectAgeFilter } from './store/actions/filter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Imperial Age';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUnits());
    this.store.dispatch(new LoadAgeFilters());
    this.store.dispatch(new SelectAgeFilter({ text: 'All', filterKey: 'age', filterValue: '' }));
    this.store.dispatch(new LoadCostFilters());
  }
}
