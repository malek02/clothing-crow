import React from 'react'
import { ReactComponent as Shopingicon } from '../../assest/shoppingbag.svg.svg';
import './cart-icon.scss'
import {connect} from 'react-redux'
import {setCartUser} from '../../redux/Cart/cart.action';

 const Carticon =({setCartUser}) =>
    (
        <div className='cart-icon' onClick={setCartUser} >
        <Shopingicon className='shopping-icon'  />
        <span className='item-count'>0</span>
        </div>
    )

const mapdispatchToProps = dispatch => ({
    setCartUser:() => dispatch(setCartUser())
  });

export default connect(null, mapdispatchToProps)(Carticon);