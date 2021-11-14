import React, { FC } from 'react'
import TrashIcon from '../assets/images/TrashIcon'
import { useActions } from '../hooks/useActions'
import { CartLine } from "../types/states/cart"
import ProductCounter from './ProductCounter'

interface CartItemProps {
    item: CartLine;
    brand: string | undefined;
}
const CartItem: FC<CartItemProps> = ({ item, brand }) => {
    const { incCountProductCart, DecCountProductCart, removeProductCart } = useActions()
    return (
        <div className="cart-body-item">
            <div className="cart-body-item-pciture-block">
                <img className="cart-body-item-pciture-block_img" src={require(`../assets${item.image}`)?.default}
                    alt={require(`../assets${item.image}`)?.default} />
            </div>
            <div>{brand} / {item.title}</div>
            <div>{item.regular_price.currency} {item.regular_price.value}</div>
            <ProductCounter count={item.quantity} plusCount={() => incCountProductCart(item.id)} minusCount={() => DecCountProductCart(item.id)} />
            <div>{item.regular_price.currency} {item.regular_price.value * item.quantity}</div>
            <button onClick={() => removeProductCart(item.id)} className="cart-body-item-remove_button">
                <TrashIcon />
            </button>
        </div>
    )
}

export default CartItem
