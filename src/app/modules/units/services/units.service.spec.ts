import { TestBed } from '@angular/core/testing';

import { UnitsService } from './units.service';

describe('UnitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitsService = TestBed.get(UnitsService);
    expect(service).toBeTruthy();
  });

  it('should return all the units if a filter is not selected', () => {
    const service: UnitsService = TestBed.get(UnitsService);
    service.selectAgeFilter({text: 'All', filterKey: 'age', filterValue: ''});
    expect(service.filteredUnits$.value.length).toBeGreaterThanOrEqual(100);
  });
});
