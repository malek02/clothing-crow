import React from 'react';
import './Form-input.scss';

export default function Forminput({handelChange,label, ...otherProps}) {
    console.log(otherProps)
    return (
        <div className="group">
        <input className='form-input' 
        onChange={handelChange} {...otherProps} />
        {
            label ? 
            (<label className={`${
                otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
                </label>
                
                
                ) : null
        }
            
        </div>
    )
}
