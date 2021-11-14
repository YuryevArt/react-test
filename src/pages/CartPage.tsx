import React, { FC } from 'react'
import logo from "../assets/images/logo.png";
import CartList from '../components/CartList';
import Logo from '../components/Logo';
import emptyCartImage from '../assets/images/empty-cart.jpg'
import { useTypedSelector } from '../hooks/useTypedSelector';

const CartPage: FC = () => {
    const { lines, totalPrice } = useTypedSelector(state => state.cart);
    return (<>
        <div className="header cart">
            <Logo />
        </div>
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-body">
            {lines.length > 0 && (<>
                <CartList />
                <div className="cart-body-total">
                    Subtotal: USD {totalPrice}
                </div>
            </>
            )}
            {lines.length === 0 && (<img className="cart-body-empty" src={emptyCartImage} alt={emptyCartImage} />)}
        </div>
        {lines.length > 0 && (<button className="cart-checkout_button">Checkout</button>)}
    </>
    )
}

export default CartPage
