import { FilterAction, FilterActionTypes, FilterState } from '../../types/states/filter'

const initialState: FilterState = {
    brand: null
}
export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    if (action.type === FilterActionTypes.SET_FILTER) {
        return {
            ...state,
            brand: action.payload,
        };
    }
    if (action.type === FilterActionTypes.CLEAR_FILTER) {
        return {
            ...state,
            brand: null,
        };
    }
    return state;
};

