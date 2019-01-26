import { Component, OnInit, HostBinding } from '@angular/core';
import { TitleService } from 'src/app/modules/core/services/title.service';
import { Unit } from 'src/app/modules/core/interfaces/unit.model';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadUnitDetails } from 'src/app/store/actions/unit.actions';
import { selectSelectedUnit } from 'src/app/store/selectors/unit.selectors';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html'
})
export class UnitDetailsComponent implements OnInit {
  @HostBinding('class.r-unit-details') true;
  unit: Unit;

  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Unit Details Page');

    this.route.params.subscribe(params => {
      this.store.dispatch(new LoadUnitDetails(+params['id']));
    });

    this.store.pipe(select(selectSelectedUnit)).subscribe(unit => this.unit = unit);
    
  }
}
