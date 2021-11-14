import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";


export const rootReducer = combineReducers({
    filter: filterReducer,
    cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>