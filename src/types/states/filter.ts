export interface FilterState {
    brand: number | null;
}

export enum FilterActionTypes {
    SET_FILTER = 'SET_FILTER',
    CLEAR_FILTER = 'CLEAR_FILTER',
}
interface SetFilterAction {
    type: FilterActionTypes.SET_FILTER;
    payload: number;
}
interface ClearFilterAction {
    type: FilterActionTypes.CLEAR_FILTER;
}

export type FilterAction =
    SetFilterAction
    | ClearFilterAction
