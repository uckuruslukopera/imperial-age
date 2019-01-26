import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppState } from '../state/app.state';
import { LoadUnits, UnitActionsEnum, LoadUnitsSuccess,
            LoadUnitDetails, LoadUnitDetailsSuccess, LoadFilteredUnits } from '../actions/unit.actions';
import { UnitsService } from 'src/app/modules/units/services/units.service';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUnitList } from '../selectors/unit.selectors';

@Injectable()
export class UnitEffects {
    constructor(
        private actions$: Actions,
        private service: UnitsService,
        private store: Store<AppState>
    ) {

    }

    @Effect()
    loadUnits$ = this.actions$.pipe(
        ofType<LoadUnits>(UnitActionsEnum.LoadUnits),
        switchMap(() => this.service.getUnits()),
        switchMap((data) => of(new LoadUnitsSuccess(data)))
    );

    @Effect()
    loadUnitDetails$ = this.actions$.pipe(
        ofType<LoadUnitDetails>(UnitActionsEnum.LoadUnitDetails),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUnitList))),
        switchMap(([id, units]) => {
            const selectedUnit = units.filter(unit => unit.id === id)[0];
            return of(new LoadUnitDetailsSuccess(selectedUnit));
        })
    );

    @Effect()
    loadFilteredUnits$ = this.actions$.pipe(
        ofType<LoadFilteredUnits>(UnitActionsEnum.LoadFilteredUnits),
        map(action => action.payload),
        switchMap((filters) => this.service.getFilteredUnits(filters)),
        switchMap((units) => of(new LoadUnitsSuccess(units)))
    );
}
