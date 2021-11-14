import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/images/CartIcon";
import { useTypedSelector } from "../hooks/useTypedSelector";

function CartButton() {
  const {totalCount} = useTypedSelector(state => state.cart)
  return (
    <div className="header-cart">
      <Link to="/cart">
        <CartIcon />
      </Link>
      <span className="header-cart-count">{totalCount}</span>
    </div>
  );
}

export default CartButton;
