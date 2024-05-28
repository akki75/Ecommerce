import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length;

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>APNASTORE</h2>
      </div>
      <div className="right menu">
        <Link to="/cart" className="item">
          <i className="shopping cart icon"></i>
          {itemCount > 0 && (
            <div className="ui red circular label">{itemCount}</div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

