import { FilterAction, FilterActionTypes } from '../../types/states/filter';

export function setFilter(brand: number): FilterAction {
    return { type: FilterActionTypes.SET_FILTER, payload: brand }
}

export function clearFilter(): FilterAction {
    return { type: FilterActionTypes.CLEAR_FILTER }
}