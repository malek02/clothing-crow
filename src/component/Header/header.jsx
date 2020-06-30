import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assest/crown.svg.svg';
import { auth } from '../../firebase/firebase';

import { connect } from 'react-redux';


function Header( {hello }  ) {

    return (
        <div className='header'>
            <Link classeName='logo-container' to={'/'}>
                <Logo className='logo'></Logo>

            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
</Link>
                <div className='option' >
                    CONTACT
</div>
                { [hello] ?
                        (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
                        
                        : (
                            <Link className='option' to='/Signin'>Sign In</Link>)
                }
                {console.log('1',hello)}
            </div>

        </div>
    )
}
const gettheState = (state) => ({
   hello: state.user.curentUser
    
});

export default connect(gettheState)(Header);