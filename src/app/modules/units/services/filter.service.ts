import { Injectable } from '@angular/core';
import { Filter } from '../../core/interfaces/filter.model';

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
export class FilterService {

  constructor() { }

  getAgeFilters(): Promise<Filter[]> {
    return new Promise((resolve, reject) => resolve(ageFilters));
  }

  getCostFilters(): Promise<Filter[]> {
    return new Promise((resolve, reject) => resolve(costFilters));
  }
}
