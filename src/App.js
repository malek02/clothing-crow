import React from 'react';
import { Route, Switch } from 'react-router-dom';
import shop from "./pages/Shop/shop";
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Header from './component/Header/header';
import Signinandsignup from './pages/sign-i-and-sign-up/sign-i-and-sign-up'
import { auth, creatProfilDoc } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {


  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {
        const userRef = await creatProfilDoc(user);

        userRef.onSnapshot(userSnopshot => {
          this.props.setCurrentUser({
         
              id: userSnopshot.id,
              ...userSnopshot.data()
           
          })

        })
      }
      else {
        this.props.setCurrentUser({ user })
      }


    })




  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }



  render() {

    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={shop} />
          <Route exact path='/Signin' component={Signinandsignup} />


        </Switch>
      </>
    );
  }
}
const dispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, dispatchToProps)(App);
