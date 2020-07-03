import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';

export default function Collectionpreview({items, Title}) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{Title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, i) => i < 4)
                    .map(item =>{
           return(
                        <CollectionItem key={item.id}
                            item={item} />

                    )})}
            </div>
        </div>
    )
}
