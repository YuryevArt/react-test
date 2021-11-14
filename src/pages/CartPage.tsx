import React, { FC } from 'react'
import logo from "../assets/images/logo.png";
import CartList from '../components/CartList';
import Logo from '../components/Logo';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CartPage: FC = () => {
    const {totalPrice} = useTypedSelector(state => state.cart);
    return (<>
        <div className="header cart">
            <Logo/>
        </div>
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-body">
            <CartList/>
            <div className="cart-body-total">Subtotal: USD {totalPrice}</div>
        </div>
        <button className="cart-checkout_button">Checkout</button>
        </>
    )
}

export default CartPage
