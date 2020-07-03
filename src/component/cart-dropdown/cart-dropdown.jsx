import React from 'react'
import CustomButton from '../custtom-buttom/costum-butom';
import './cart-dropdown.scss';
import {connect} from 'react-redux';
import Cartitem from '../cart-item/cart-item';



 const Cartdropdown=({cartItems})=>{
    
   
    return (
        <div className='cart-dropdown'> 
        <div className='cart-items'>
        {
            cartItems.map(cartitem=>
            (<Cartitem key={cartitem.id} item={cartitem}/>))
        }
        </div>
        <CustomButton  >GO TO CHECKOUT</CustomButton>
       
       
        </div>
    )
}
const gettheState = ({cart:{cartItems} }) => ({
    cartItems 
   
   });

export default connect(gettheState)(Cartdropdown);