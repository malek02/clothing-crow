import React, { Component } from 'react';
import SHOP_DATA from "./Shop.data";
import Collectionpreview from '../../component/prreview-collectio/preview-collection'



export default class shop extends Component {
    constructor(props){
    super(props);
    this.state= {
        collections: SHOP_DATA
    };
    
}
    render() {
        const {collections}= this.state
        return (
            <div className='shop-page'>
                {collections.map(collect=>{
                    return(
<Collectionpreview key={collect.id} Title={collect.title} 
items={collect.items} />
                )})}
            </div>
        )
    }
}
