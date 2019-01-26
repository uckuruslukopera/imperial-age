import { Action } from "@ngrx/store";
import { Unit } from "src/app/modules/core/interfaces/unit.model";
import { Filter } from "src/app/modules/core/interfaces/filter.model";

export enum UnitActionsEnum {
    LoadUnits = '[Unit] Load Units',
    LoadUnitsSuccess =  '[Unit] Load Units Success',
    LoadUnitDetails = '[Unit] Load Unit Details',
    LoadUnitDetailsSuccess = '[Unit] Load Unit Details Success',
    LoadFilteredUnits = '[Unit] Load Filtered Units'
} 

export class LoadUnits implements Action {
    public readonly type = UnitActionsEnum.LoadUnits;
}

export class LoadUnitsSuccess implements Action {
    public readonly type = UnitActionsEnum.LoadUnitsSuccess;
    constructor(public payload: Unit[]) {}
}

export class LoadUnitDetails implements Action {
    public readonly type = UnitActionsEnum.LoadUnitDetails;
    constructor(public payload: number) {}
}

export class LoadUnitDetailsSuccess implements Action {
    public readonly type = UnitActionsEnum.LoadUnitDetailsSuccess;
    constructor(public payload: Unit) {}
}

export class LoadFilteredUnits implements Action {
    public readonly type = UnitActionsEnum.LoadFilteredUnits;
    constructor(public payload: Filter[]) {}
}


export type UnitActions = 
    LoadUnits |
    LoadUnitsSuccess |
    LoadUnitDetails |
    LoadUnitDetailsSuccess |
    LoadFilteredUnits
    