import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length;

  return (
    <Link to="/cart" className="item">
      <i className="shopping cart icon"></i>
      {itemCount > 0 && (
        <div className="ui red circular label">{itemCount}</div>
      )}
    </Link>
  );
};

export default CartIcon;