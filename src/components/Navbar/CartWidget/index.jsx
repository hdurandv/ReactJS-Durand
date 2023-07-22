import React from 'react';
import "./styles.css";
import Cart from "../../../assets/Icons/cart.png";

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
        <img src={Cart} alt="cart" className="cart-icon" />
      <i className="global shopping-cart"></i>
      <span className="cart-item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;