import { Unit } from "src/app/modules/core/interfaces/unit.model";

export interface UnitState {
    units: Unit[]
    selectedUnit: Unit
}

export const initialUnitState: UnitState = {
    units: null,
    selectedUnit: null
}