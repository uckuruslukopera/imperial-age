import { UnitState, initialUnitState } from "./unit.state";
import { initialFilterState, FilterState } from "./filter.state";

export interface AppState {
    units: UnitState,
    filters: FilterState
}

export const initialAppState: AppState = {
    units: initialUnitState,
    filters: initialFilterState
}