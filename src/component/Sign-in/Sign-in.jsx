import React, { Component } from 'react'
import Forminput from '../Form-input/Form-input';
import './Sign-in.scss';
import Costumbutom from '../custtom-buttom/costum-butom';
import { SignInwithFcebook, SignInwithGoogle } from '../../firebase/firebase';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
export default class Signin extends Component {
  state={
       email:'',
       password:''

   } 


   handelChange=(e)=>{
const {value,name}= e.target;
       this.setState({[name]:value})
       
      
   }



handulsabmit=(e)=>{
    e.preventDefault();
    this.setState({email:'' , password:''})

}

    render() {
        
        
        return (
            <div className='sign-in'>
            <h2>i already have an account</h2>
            <span>Sign in with your eamail and passsword</span>
            <form onSubmit={e=>this.handulsabmit(e)}>
                <Forminput name="email" 
                value={this.state.email} 
                label='email'
                required 
                onChange={e=>this.handelChange(e)}
                />
            
                <Forminput
                name="password" 
                label='password'
                value={this.state.password} 
               onChange={e=>this.handelChange(e)}
                    required  />
            <div className="buttons">
                <Costumbutom type='submit' value='Submit Form' >
                    Sign in
                </Costumbutom>
                <Costumbutom googleSign onClick={SignInwithGoogle} >
                <FcGoogle />
                    Sign in With Google
                </Costumbutom>
                <Costumbutom facebookSign onClick={SignInwithFcebook} >
                <FaFacebook /> 
                    Sign in With Facebook
                </Costumbutom>
                </div>
            </form>
                
            </div>
        )
    }
}
