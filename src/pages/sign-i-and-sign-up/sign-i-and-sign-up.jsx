import './sign-i-and-sign-up.scss';
import React from 'react'
import Signin from '../../component/Sign-in/Sign-in';
import Signup from '../../component/Sign-up/Sign-up';

export default function Signinandsignup() {
    return (
        <div className='sign-in-and-sign-up'>
     <Signin />
     <Signup />     
        </div>
    )
}
