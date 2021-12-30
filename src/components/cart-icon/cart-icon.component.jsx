import React from 'react';

/* import './cart-icon.styles.scss'; */
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles'

/* import { ReactComponent as ShoppingIcon } from 'assets/images/shopping-bag.svg'; */

const CartIcon = ({toggleCartHidden}) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCountContainer>0</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
