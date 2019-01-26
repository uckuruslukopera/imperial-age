import { Action } from "@ngrx/store";
import { Filter } from "src/app/modules/core/interfaces/filter.model";

export enum FilterActionsEnum {
    LoadAgeFilters = '[Filter] Load Age Filters',
    LoadAgeFiltersSuccess =  '[Filter] Load Age Filters Success',
    LoadCostFilters = '[Filter] Load Cost Filters',
    LoadCostFiltersSuccess = '[Filter] Load Cost Filters Success',
    SelectAgeFilter = '[Filter] Select Age Filter',
    SelectCostFilter = '[Filter] Select Cost Filter',
    DeselectCostFilter = '[Filter] Deselect Cost Filter',
    UpdateCostFilter = '[Filter] Update Cost Filter'
} 

export class LoadAgeFilters implements Action {
    public readonly type = FilterActionsEnum.LoadAgeFilters;
}

export class LoadAgeFiltersSuccess implements Action {
    public readonly type = FilterActionsEnum.LoadAgeFiltersSuccess;
    constructor(public payload: Filter[]) {}
}

export class LoadCostFilters implements Action {
    public readonly type = FilterActionsEnum.LoadCostFilters;
}

export class LoadCostFiltersSuccess implements Action {
    public readonly type = FilterActionsEnum.LoadCostFiltersSuccess;
    constructor(public payload: Filter[]) {}
}

export class SelectAgeFilter implements Action {
    public readonly type = FilterActionsEnum.SelectAgeFilter;
    constructor(public payload: Filter) {}
}

export class SelectCostFilter implements Action {
    public readonly type = FilterActionsEnum.SelectCostFilter;
    constructor(public payload: Filter) {}
}

export class DeselectCostFilter implements Action {
    public readonly type = FilterActionsEnum.DeselectCostFilter;
    constructor(public payload: Filter) {}
}

export class UpdateCostFilter implements Action {
    public readonly type = FilterActionsEnum.UpdateCostFilter;
    constructor(public payload: Filter) {}
}

export type FilterActions = 
    LoadAgeFilters |
    LoadAgeFiltersSuccess |
    LoadCostFilters |
    LoadCostFiltersSuccess |
    SelectAgeFilter | 
    SelectCostFilter |
    DeselectCostFilter |
    UpdateCostFilter