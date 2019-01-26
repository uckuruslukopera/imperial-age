import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppState } from '../state/app.state';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUnitList } from '../selectors/unit.selectors';
import { LoadAgeFilters, FilterActionsEnum, LoadAgeFiltersSuccess,
            LoadCostFilters, LoadCostFiltersSuccess, SelectCostFilter, SelectAgeFilter } from '../actions/filter.actions';
import { FilterService } from 'src/app/modules/units/services/filter.service';

@Injectable()
export class FilterEffects {
    constructor(
        private actions$: Actions,
        private service: FilterService,
        private store: Store<AppState>
    ) {

    }

    @Effect()
    loadAgeFilters$ = this.actions$.pipe(
        ofType<LoadAgeFilters>(FilterActionsEnum.LoadAgeFilters),
        switchMap(() => this.service.getAgeFilters()),
        switchMap((data) => of(new LoadAgeFiltersSuccess(data)))
    );

    @Effect()
    loadCostFilters$ = this.actions$.pipe(
        ofType<LoadCostFilters>(FilterActionsEnum.LoadCostFilters),
        switchMap(() => this.service.getCostFilters()),
        switchMap((data) => of(new LoadCostFiltersSuccess(data)))
    );
}
