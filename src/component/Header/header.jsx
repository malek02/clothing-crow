import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logoo } from '../../assest/crown.svg.svg';
import { auth } from '../../firebase/firebase';
import Carticon from '../cart-icon/cart-icon'
import { connect } from 'react-redux';
import  Cartdropdown from '../cart-dropdown/cart-dropdown';

function Header({ currentUser, hidden }) {

    return (
        <div className='header'>
            <Link classeName='logo-container' to={'/'}>
                <Logoo className='logo'></Logoo>

            </Link>
            
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
</Link>

                <Link className='option' to='/Signin'>
                    CONTACT
</Link>

                {currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)

                    : (
                        <Link className='option' to='/Signin'>Sign In</Link>)
                }
              
                {console.log('1', currentUser)}
                
                <Carticon />
            </div>
           { hidden ? null
               : <Cartdropdown />
               }

        </div>
       
    )
}
const mapStateToProps = ({user: {curentUser}, cart:{hidden} })=> ({
    currentUser: curentUser,
hidden
});

export default connect(mapStateToProps)(Header);