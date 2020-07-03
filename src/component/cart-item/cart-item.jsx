import React from 'react';
import './cart-item.scss';
//why without div style of image

export default function Cartitem({ item }) {

    const { price, name, quantity, imageUrl } = item

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' /> 
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity}* ${price}</span>
            </div>

        </div>
    )
}
