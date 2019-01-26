import { UnitState, initialUnitState } from "../state/unit.state";
import { UnitActions, UnitActionsEnum } from "../actions/unit.actions";

export const unitReducers = (
    state = initialUnitState,
    action: UnitActions
): UnitState => {
    switch (action.type) {
        case UnitActionsEnum.LoadUnitsSuccess: {
            return {
                ...state,
                units: action.payload
            }
        }
        case UnitActionsEnum.LoadUnitDetailsSuccess: {
            return {
                ...state,
                selectedUnit: action.payload
            }
        }
        default:
            return state;
    }
}



