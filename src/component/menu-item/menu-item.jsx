import React from 'react';
import './menu-item.scss';
import {withRouter} from "react-router-dom";

 function Menuitem(props) {
     
    return (
        <div  
        className={`${props.size} menu-item`} onClick={()=>props.history.push(`${props.match.url}${props.url}`)} >
        
        <div className='background-image' style={{backgroundImage: `url(${props.imageUrl})`}}/>
                    <div className='content' >
                    
                        <h1 className='title' >{props.title.toUpperCase()}</h1>
                        
                        <span className='subtitle' >SHOP NOW</span>
                    </div>
                    
                </div>
    )
}

export default withRouter(Menuitem);