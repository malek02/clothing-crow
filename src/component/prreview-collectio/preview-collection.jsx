import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';

export default function Collectionpreview(props) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.Title.toUpperCase()}</h1>
            <div className='preview'>
                {props.items
                    .filter((item, i) => i < 4)
                    .map(item =>{
           return(
                        <CollectionItem key={item.id}
                            name={item.name}
                            image={item.imageUrl}
                            price={item.price} />

                    )})}
            </div>
        </div>
    )
}
