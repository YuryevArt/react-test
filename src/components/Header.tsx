import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CartButton from "./CartButton";
import Logo from "./Logo";
function Header() {
  const { totalCount } = useTypedSelector(state => state.cart);
  return (
    <div className="header">
      <Logo />
      <CartButton />
    </div>
  );
}

export default Header;
