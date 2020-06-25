import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assest/crown.svg.svg';
import { auth } from '../../firebase/firebase';

export default function Header({currentUser}) {
    console.log(1,currentUser)
    return (
        <div className='header'>
            <Link classeName='logo-container' to={'/'}>
                <Logo className='logo'></Logo>

            </Link>
            <div className='options'>
<Link className='option' to='/shop'>
    SHOP
</Link>
<Link className='option' to='/shop'>
    CONTACT
</Link>
{
    currentUser ?
    <div className='option' onClick={e=>auth.signOut()}>Sign Out</div>
    :
    <Link className='option' to='/Signin'>Sign In</Link>
}
            </div>

        </div>
    )
}
