import React, { FC } from 'react'
import AngleDown from '../assets/images/AngleDown'
import AngleUp from '../assets/images/AngleUp'

interface ProductCounterProps {
    count: number;
    plusCount(): void;
    minusCount(): void;
}

const ProductCounter: FC<ProductCounterProps> = ({ count, plusCount, minusCount }) => {
    return (
        <div className="cart-body-item-counter-block">
            <input className="cart-body-item-counter-block_input" type="text" value={count} readOnly />
            <div className="cart-body-item-counter-block-buttons">
                <button onClick={plusCount}><AngleUp /></button>
                <button onClick={minusCount}><AngleDown /></button>
            </div>
        </div>
    )
}

export default ProductCounter
