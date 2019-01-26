import { unitReducers } from './unit.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { filterReducers } from './filter.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    units: unitReducers,
    filters: filterReducers
};
