import React from 'react'
import { ReactComponent as Shopingicon } from '../../assest/shoppingbag.svg.svg';
import './cart-icon.scss'
import {connect} from 'react-redux'
import {setCartUser} from '../../redux/Cart/cart.action';

 const Carticon =({setCartUser, cartItem}) =>
    (
        <div className='cart-icon' onClick={setCartUser} >
        <Shopingicon className='shopping-icon'  />
        <span className='item-count'>{cartItem}</span>
        </div>
    )
    const gettheState = ({cart:{cartItems}}) => ({
      cartItem: cartItems.reduce((a, b)=> a + b.quantity,0)//see the fonction reducer how it work
     //see slector how it work
     });
const mapdispatchToProps = dispatch => ({
    setCartUser:() => dispatch(setCartUser())
  });

export default connect(gettheState, mapdispatchToProps)(Carticon);