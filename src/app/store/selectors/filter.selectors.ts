import { AppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { FilterState } from "../state/filter.state";

const selectFilters = (state: AppState) => state.filters;

export const selectAgeFilterList = createSelector(
    selectFilters,
    (state: FilterState) => state.ageFilters
)

export const selectCostFilterList = createSelector(
    selectFilters,
    (state: FilterState) => state.costFilters
)

export const selectSelectedAgeFilter = createSelector(
    selectFilters,
    (state: FilterState) => state.selectedAgeFilter
)

export const selectSelectedCostFilters = createSelector(
    selectFilters,
    (state: FilterState) => state.selectedCostFilters
)