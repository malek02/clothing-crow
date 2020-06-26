import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assest/crown.svg.svg';
import { auth } from '../../firebase/firebase';
import {withRouter} from "react-router-dom";

 function Header({currentUser, history,match, ...otherProps}) {
   
    return (
        <div className='header'>
            <Link classeName='logo-container' to={'/'}>
                <Logo className='logo'></Logo>

            </Link>
            <div className='options'>
<Link className='option' to='/shop'>
    SHOP
</Link>
<div className='option' onClick={()=>history.push(`${match.url}Signin`)}>
    CONTACT
</div>
{
    currentUser ?
    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
    :
    <Link className='option' to='/Signin'>Sign In</Link>
}
            </div>

        </div>
    )
}


export default withRouter(Header);