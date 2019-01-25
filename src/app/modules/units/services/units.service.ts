import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unit } from '../../core/interfaces/unit.model.js';
import { Filter } from '../../core/interfaces/filter.model.js';
import * as data from '../../core/mocks/age-of-empires-units.json';
import { Cost } from '../../core/interfaces/cost.model.js';

const ageFilters = [
  { text: 'All', filterKey: 'age', filterValue: '' },
  { text: 'Dark', filterKey: 'age', filterValue: 'Dark' },
  { text: 'Feudal', filterKey: 'age', filterValue: 'Feudal' },
  { text: 'Castle', filterKey: 'age', filterValue: 'Castle' },
  { text: 'Imperial', filterKey: 'age', filterValue: 'Imperial' }
]

const costFilters = [
  { text: 'Food', filterKey:  'Food', filterValue: 200},
  { text: 'Wood', filterKey: 'Wood', filterValue: 200},
  { text: 'Gold', filterKey: 'Gold', filterValue: 200}
]

@Injectable({
  providedIn: 'root'
})

export class UnitsService {

  filteredUnits$: BehaviorSubject<Unit[]> = new BehaviorSubject<Unit[]>(null);
  selectedUnit$: BehaviorSubject<Unit> = new BehaviorSubject<Unit>(null);
  availableAgeFilters$: BehaviorSubject<Filter[]> = new BehaviorSubject<Filter[]>(ageFilters);
  selectedAgeFilter$: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(ageFilters[0]);
  availableCostFilters$: BehaviorSubject<Filter[]> = new BehaviorSubject<Filter[]>(costFilters);
  selectedCostFilters$: BehaviorSubject<Filter[]> = new BehaviorSubject<Filter[]>([]);

  constructor() { }

  retrieveUnits() {
    let filteredUnits = (data && data.units) ? data.units : [];
    if (filteredUnits && filteredUnits.length) {
      if (this.selectedAgeFilter$.value && this.selectedAgeFilter$.value.filterValue) {
        filteredUnits = filteredUnits.filter(unit => unit.age === this.selectedAgeFilter$.value.filterValue);
      }
      if (this.selectedCostFilters$.value.length) {
        this.selectedCostFilters$.value.forEach(filter => {
          filteredUnits = filteredUnits.filter(unit => unit.cost && unit.cost[filter.filterKey] ? unit.cost[filter.filterKey] <= filter.filterValue: false);
        })
      }
    }
    this.filteredUnits$.next(filteredUnits);
  }

  setSelectedUnit(id: number) {
    if (data && data.units) {
      this.selectedUnit$.next(data.units.find(u => u.id === id));
    }
  }

  selectAgeFilter(filter: Filter) {
    this.selectedAgeFilter$.next(filter);
    this.retrieveUnits();
  }

  selectCostFilter(filter: Filter) {
    if (this.selectedCostFilters$.value.length && this.selectedCostFilters$.value.includes(filter)) return;
    this.selectedCostFilters$.next([...this.selectedCostFilters$.value, filter]);
    this.retrieveUnits();
  }

  deselectCostFilter(filter: Filter) {
    if (!this.selectedCostFilters$.value.length) return;
    let newSelectedCostFilters = this.selectedCostFilters$.value.filter(cf => cf.filterKey !== filter.filterKey)
    this.selectedCostFilters$.next(newSelectedCostFilters);
    this.retrieveUnits();
  }

  updateCostFilter(filter: Filter) {
    if (!this.selectedCostFilters$.value.length) return;
    const newSelectedCostFilters = this.selectedCostFilters$.value.filter(f => f.filterKey !== filter.filterKey);
    this.selectedCostFilters$.next([...newSelectedCostFilters, filter]);
    this.retrieveUnits();
  }

}
