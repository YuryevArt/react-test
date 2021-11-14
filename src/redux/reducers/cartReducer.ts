import { CartState, CartAction, CartActionTypes } from '../../types/states/cart';

const initialState: CartState = {
    lines: [],
    totalCount: 0,
    totalPrice: 0,
};

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    let currPosition: number;
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            state.totalCount++;
            state.totalPrice = +(state.totalPrice + action.payload.regular_price.value).toFixed(2);
            currPosition = state.lines.findIndex((product) => product.id === action.payload.id)
            if (currPosition === -1) {
                state.lines.push({ ...action.payload, quantity: 1 });
            } else {
                state.lines[currPosition].quantity++;
            }
            return {...state};
        case CartActionTypes.REMOVE_PRODUCT:
            currPosition = state.lines.findIndex((product) => product.id === action.payload);
            if (currPosition !== -1) {
                state.totalCount -= state.lines[currPosition].quantity;
                state.totalPrice = +(state.totalPrice - state.lines[currPosition].regular_price.value).toFixed(2);
                state.lines.splice(currPosition, 1);
            }
            return {...state};
        case CartActionTypes.INC_COUNT_PRODUCT:
            currPosition = state.lines.findIndex((product) => product.id === action.payload);
            if (currPosition !== -1) {
                state.totalCount++;
                state.totalPrice = +(state.totalPrice + state.lines[currPosition].regular_price.value).toFixed(2);
                state.lines[currPosition].quantity++;
            }
            return {...state};
        case CartActionTypes.DEC_COUNT_PRODUCT:
            currPosition = state.lines.findIndex((product) => product.id === action.payload);
            if (currPosition !== -1) {
                state.totalCount--;
                state.totalPrice = +(state.totalPrice - state.lines[currPosition].regular_price.value).toFixed(2);
                if (state.lines[currPosition].quantity === 1) {
                    state.lines.splice(currPosition, 1);
                }else{
                    state.lines[currPosition].quantity--;
                }
            }
            return {...state};
        default:
            return state;
    }
};