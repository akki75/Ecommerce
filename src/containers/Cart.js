import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="ui container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="ui divided items">
          {cartItems.map((item) => (
            <div className="item" key={item.id}>
              <div className="ui small image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="meta">
                  <span className="price">${item.price}</span>
                  <span className="stay">{item.category}</span>
                </div>
                <div className="description">
                  <p>{item.description}</p>
                </div>
                <div className="extra">
                  <div className="ui label">Quantity: 1</div> {/* Update as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
