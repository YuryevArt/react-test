import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CartItem from './CartItem'
import List from './List'
import brandJson from "../assets/brands.json";

const CartList: FC = () => {
    const cart = useTypedSelector(state => state.cart)
    return (
        <>
            <div className="cart-body-item head">
                <div>
                </div>
                <div>Item</div>
                <div>Price</div>
                <div>Qty</div>
                <div>Total</div>
                <div></div>
            </div>
            <List
                items={cart.lines}
                renderItem={(item) => <CartItem brand={brandJson.find(brand => brand.id === item.brand)?.title} key={item.id} item={item} />}

            />
        </>
    )
}

export default CartList
