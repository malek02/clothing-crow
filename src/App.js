import React from 'react';
import{Route, Switch} from 'react-router-dom';
import shop from "./pages/Shop/shop";
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Header from './component/Header/header';
import Signinandsignup from './pages/sign-i-and-sign-up/sign-i-and-sign-up'
import {auth ,creatProfilDoc } from './firebase/firebase';

 
  

class App extends React.Component {
  constructor(){
    super();
    this.state={
      curentUser: null

    }
  }

unsubscribeFromAuth= null;
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
   
   if (user) {
     const  userRef = await creatProfilDoc(user);
   
     userRef.onSnapshot(userSnopshot =>{
      this.setState({
        curentUser:{ id: userSnopshot.id,
        ...userSnopshot.data()}
      })
      console.log('state',this.state);
     })
       }
       else {
         this.setState({curentUser:user})
      }
       
       
       })
 
    
 

}
componentWillUnmount(){
  this.unsubscribeFromAuth();

}



  render(){
  
  return (
    <>
<Header currentUser={this.state.curentUser} />
    <Switch>
    <Route  exact path='/' component={Homepage} />
    <Route  exact path='/shop' component={shop} />
   <Route exact path='/Signin' component={Signinandsignup} />
   
      
    </Switch>
    </>
  );
}
}

export default App;
