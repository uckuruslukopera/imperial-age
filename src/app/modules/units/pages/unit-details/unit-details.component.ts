import { Component, OnInit, HostBinding } from '@angular/core';
import { TitleService } from 'src/app/modules/core/services/title.service';
import { UnitsService } from '../../services/units.service';
import { Unit } from 'src/app/modules/core/interfaces/unit.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html'
})
export class UnitDetailsComponent implements OnInit {
  @HostBinding('class.r-unit-details') true;
  unit: Unit;

  constructor(
    private titleService: TitleService,
    private unitsService: UnitsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Unit Details Page');
    this.route.params.subscribe(params => {
      this.unitsService.setSelectedUnit(+params['id']);
    });

    this.unitsService.selectedUnit$.subscribe(unit => this.unit = unit);
  }
}
