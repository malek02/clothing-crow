import React from 'react'
import './collection-item.scss';
import { connect } from 'react-redux';
import {addItem} from '../../redux/Cart/cart.action';
import Costumbutom from '../custtom-buttom/costum-butom';

const CollectionItem=({ item,addItem })=> {
   const {imageUrl, name, price}=item
    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl})` }}
                className='image' />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Costumbutom invented onClick={()=>addItem(item)} >ADD TO CART</Costumbutom>

        </div>

    )
}
const mapdispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  })
export default connect(null,mapdispatchToProps)(CollectionItem);