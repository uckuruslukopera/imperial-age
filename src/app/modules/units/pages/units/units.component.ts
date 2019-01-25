import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService } from '../../services/units.service';
import { Unit } from '../../../core/interfaces/unit.model';
import { TitleService } from '../../../core/services/title.service';
import { Router } from '@angular/router';
import { Filter } from 'src/app/modules/core/interfaces/filter.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html'
})
export class UnitsComponent implements OnInit {
  @HostBinding('class.r-units') true;
  units: Unit[] = [];
  costFilters: Filter[] = [];
  selectedCostFilters: Filter[] = [];
  ageFilters: Filter[] = [];
  selectedAgeFilter: Filter;

  constructor(
    private titleService: TitleService,
    private unitsService: UnitsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Units Page');
    this.unitsService.filteredUnits$.subscribe(units => 
      this.units = units
    );
    this.unitsService.availableCostFilters$.subscribe(filters => 
      this.costFilters = filters
    );
    this.unitsService.selectedCostFilters$.subscribe(selectedFilters => 
      this.selectedCostFilters = selectedFilters
    );
    this.unitsService.availableAgeFilters$.subscribe(filters => 
      this.ageFilters = filters
    );
    this.unitsService.selectedAgeFilter$.subscribe(selectedFilter => 
      this.selectedAgeFilter = selectedFilter
    );

    this.unitsService.retrieveUnits();
  }

  setSelectedUnit(e) {
    this.unitsService.setSelectedUnit(e);
    this.router.navigate(['units', e.id]);
  }

  selectCostFilter(e) {
    this.unitsService.selectCostFilter(e);
  }

  deselectCostFilter(e) {
    this.unitsService.deselectCostFilter(e);
  }

  updateCostFilter(e) {
    this.unitsService.updateCostFilter(e);
  }

  selectAgeFilter(e) {
    this.unitsService.selectAgeFilter(e);
  }
}
