import { Injectable } from '@angular/core';
import { Unit } from '../../core/interfaces/unit.model.js';
import { Filter } from '../../core/interfaces/filter.model.js';
import * as data from '../../core/mocks/age-of-empires-units.json';



@Injectable({
  providedIn: 'root'
})

export class UnitsService {

  constructor() { }

  getUnits(): Promise<Unit[]> {
    return new Promise((resolve, reject) => resolve(data.units));
  }

  getFilteredUnits(filters: Filter[]): Promise<Unit[]> {
    return new Promise((resolve, reject) => {
      let filteredUnits = data.units;
      filters.forEach(filter => {
        if (filter.filterKey == 'age' && filter.filterValue) {
          filteredUnits = filteredUnits.filter(unit => unit['age'] == filter.filterValue);
        } else if (filter.filterKey == 'age') {
          filteredUnits = filteredUnits
        } else {
          filteredUnits = filteredUnits.filter(unit => unit.cost && unit.cost[filter.filterKey] ? unit.cost[filter.filterKey] <= filter.filterValue: false)
        }
      }); 
      resolve(filteredUnits);
    });
  }





}
