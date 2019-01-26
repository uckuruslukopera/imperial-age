import { AppState } from '../state/app.state';
import { UnitState } from '../state/unit.state';
import { createSelector } from '@ngrx/store';

const selectUnits = (state: AppState) => state.units;

export const selectUnitList = createSelector(
    selectUnits,
    (state: UnitState) => state.units
);

export const selectSelectedUnit = createSelector(
    selectUnits,
    (state: UnitState) => state.selectedUnit
);
