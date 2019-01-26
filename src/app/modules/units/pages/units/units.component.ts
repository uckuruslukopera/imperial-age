import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService } from '../../services/units.service';
import { Unit } from '../../../core/interfaces/unit.model';
import { TitleService } from '../../../core/services/title.service';
import { Router } from '@angular/router';
import { Filter } from 'src/app/modules/core/interfaces/filter.model';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { LoadUnits, LoadAgeFilteredUnits, LoadCostFilteredUnits, LoadFilteredUnits } from 'src/app/store/actions/unit.actions';
import { selectUnitList } from 'src/app/store/selectors/unit.selectors';
import { selectAgeFilterList, selectCostFilterList, selectSelectedAgeFilter, selectSelectedCostFilters } from 'src/app/store/selectors/filter.selectors';
import { SelectCostFilter, SelectAgeFilter, DeselectCostFilter, UpdateCostFilter } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html'
})
export class UnitsComponent implements OnInit {
  @HostBinding('class.r-units') true;
  
  units: Unit[];
  ageFilters: Filter[];
  costFilters: Filter[];
  selectedAgeFilter: Filter;
  selectedCostFilters: Filter[] = [];

  constructor(
    private titleService: TitleService,
    private unitsService: UnitsService,
    private router: Router,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit() {
    this.titleService.setTitle('Units Page');

    this.store.pipe(select(selectUnitList)).subscribe(units => this.units = units);   
    this.store.pipe(select(selectAgeFilterList)).subscribe(filters => this.ageFilters = filters);   
    this.store.pipe(select(selectCostFilterList)).subscribe(filters => this.costFilters = filters);   
    this.store.pipe(select(selectSelectedAgeFilter)).subscribe(filter => this.selectedAgeFilter = filter);
    this.store.pipe(select(selectSelectedCostFilters)).subscribe(filter => this.selectedCostFilters = filter);
  }

  setSelectedUnit(e) {
    this.router.navigate(['units', e.id]);
  }

  selectAgeFilter(filter: Filter) {
    this.store.dispatch(new SelectAgeFilter(filter));
    this.store.dispatch(new LoadFilteredUnits([this.selectedAgeFilter, ...this.selectedCostFilters]));
  }

  selectCostFilter(filter: Filter) {
    this.store.dispatch(new SelectCostFilter(filter));
    this.store.dispatch(new LoadFilteredUnits([this.selectedAgeFilter, ...this.selectedCostFilters]));
  }

  deselectCostFilter(filter) {
    this.store.dispatch(new DeselectCostFilter(filter));
    this.store.dispatch(new LoadFilteredUnits([this.selectedAgeFilter, ...this.selectedCostFilters]));
  }

  updateCostFilter(filter) {
    this.store.dispatch(new UpdateCostFilter(filter));
    this.store.dispatch(new LoadFilteredUnits([this.selectedAgeFilter, ...this.selectedCostFilters]));
  }
}
