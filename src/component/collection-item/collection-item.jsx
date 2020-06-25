import React from 'react'
import './collection-item.scss';

export default function CollectionItem(props) {
    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${props.image})` }}
                className='image' />

            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>${props.price}</span>
            </div>
        </div>

    )
}
