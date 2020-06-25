import React from 'react';
import './costum-butom.scss';

export default function Costumbutom({children, googleSign, facebookSign , ...otherProps}) {
    
    return (
        <button className={`${googleSign ? 'google-sign-in' : '' } 
        ${facebookSign ? 'face-sign-in' : '' } 
        custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
