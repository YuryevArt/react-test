import { IProduct } from '../types'

export interface CartLine extends IProduct {
    quantity: number;
}
export interface CartState {
    lines: CartLine[];
    totalCount: number;
    totalPrice: number;
}
export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    INC_COUNT_PRODUCT = 'INC_COUNT_PRODUCT',
    DEC_COUNT_PRODUCT = 'DEC_COUNT_PRODUCT',

}
interface AddProductAction {
    type: CartActionTypes.ADD_PRODUCT;
    payload: IProduct;
}
interface RemoveProductAction {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: number;
}
interface IncCountProductAction {
    type: CartActionTypes.INC_COUNT_PRODUCT;
    payload: number;
}
interface DecCountProductAction {
    type: CartActionTypes.DEC_COUNT_PRODUCT;
    payload: number;
}
export type CartAction =
    AddProductAction
    | RemoveProductAction
    | IncCountProductAction
    | DecCountProductAction