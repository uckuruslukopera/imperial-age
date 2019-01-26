import { Filter } from "src/app/modules/core/interfaces/filter.model";

export interface FilterState {
    ageFilters: Filter[];
    selectedAgeFilter: Filter;
    costFilters: Filter[];
    selectedCostFilters: Filter[];
}

export const initialFilterState: FilterState = {
    ageFilters: [],
    selectedAgeFilter: null,
    costFilters: [],
    selectedCostFilters: []
}