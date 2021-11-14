import { CartAction, CartActionTypes } from '../../types/states/cart'
import { IProduct } from '../../types/types'
export function addProductCart(product: IProduct): CartAction {
    return { type: CartActionTypes.ADD_PRODUCT, payload: product }
}

export function removeProductCart(id: number): CartAction {
    return { type: CartActionTypes.REMOVE_PRODUCT, payload: id }
}

export function incCountProductCart(id: number): CartAction {
    return { type: CartActionTypes.INC_COUNT_PRODUCT, payload: id }
}

export function DecCountProductCart(id: number): CartAction {
    return { type: CartActionTypes.DEC_COUNT_PRODUCT, payload: id }
}