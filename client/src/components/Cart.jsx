import {useState} from 'react';

import CartItem from "./CartItem"

const Cart = ({onCheckout, cartItems}) => {
  const subtotals = cartItems.map(item => item.quantity * item.price)
  const total = subtotals.reduce((x, y) => x + y, 0)
  
  return (
    <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {
            cartItems.map(item => {
              return <CartItem key={item["_id"]}item={item}/>
            })
          }

          <tr>
            <td colSpan="3" className="total">Total: ${total}</td>
          </tr>
        </table>
        <a onClick={onCheckout} className={`button checkout ${cartItems.length === 0 ? 'disabled':''}`}>Checkout</a>
    </div>
  )
}

export default Cart
