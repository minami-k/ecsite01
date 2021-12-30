import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

/* import './cart-dropdown.styles.scss';
 */
import { CartDropdownButton, CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    {/* <CartItemsContainer>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </CartItemsContainer> */}
    <CartItemsContainer>GO TO CHECKOUT</CartItemsContainer>
  </CartDropdownContainer>
);

export default CartDropdown;
