import { initialFilterState, FilterState } from "../state/filter.state";
import { FilterActions, FilterActionsEnum } from "../actions/filter.actions";



export const filterReducers = (
    state = initialFilterState,
    action: FilterActions
): FilterState => {
    switch (action.type) {
        case FilterActionsEnum.LoadAgeFiltersSuccess: {
            return {
                ...state,   
                ageFilters: action.payload
            }
        }
        case FilterActionsEnum.LoadCostFiltersSuccess: {
            return {
                ...state,
                costFilters: action.payload
            }
        }
        case FilterActionsEnum.SelectAgeFilter: {
            return {
                ...state,
                selectedAgeFilter: action.payload
            }
        }
        case FilterActionsEnum.SelectCostFilter: {
            if (state.selectedCostFilters && state.selectedCostFilters.length && state.selectedCostFilters.includes(action.payload)) {
                return state;
            } else {
                return {
                    ...state,
                    selectedCostFilters: [...state.selectedCostFilters, action.payload] 
                }
            }
            
        }
        case FilterActionsEnum.DeselectCostFilter: {
            if (state.selectedCostFilters && state.selectedCostFilters.length) {
                let newSelectedCostFilters = state.selectedCostFilters.filter(cf => cf.filterKey !== action.payload.filterKey);
                return {
                    ...state,
                    selectedCostFilters: [...newSelectedCostFilters] 
                }
            } else {
                return state;
            }
            
        }
        case FilterActionsEnum.UpdateCostFilter: {
            if (!state.selectedCostFilters || state.selectedCostFilters.length) {
                return state;
            } else {
                let newSelectedCostFilters = state.selectedCostFilters.filter(cf => cf.filterKey !== action.payload.filterKey);
                return {
                    ...state,
                    selectedCostFilters: [...newSelectedCostFilters, action.payload] 
                }
            }
        }
        default:
            return state;
    }
}



