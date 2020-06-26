import React, { Component } from 'react';
import Forminput from '../Form-input/Form-input';
import './Sign-up.scss';
import Costumbutom from '../custtom-buttom/costum-butom';
import { auth, creatProfilDoc } from '../../firebase/firebase';


export default class Signup extends Component {
    constructor(){
        super()
        this.state={

            displayName:"",
            email: "",
            password:"",
            confirmPassword:""

        }
    }

    handelchange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }

handleSubmit= async (e) => {
    e.preventDefault();
    const {displayName,
        email,
        password,
        confirmPassword}=this.state;

    if(password !== confirmPassword){
        alert("password dont match");
        return;
    }
    try{
        const { client } = await auth.createUserWithEmailAndPassword(email,password);

        await creatProfilDoc(client,{displayName});
    } catch(error){
        console.error(error);

    }
    this.setState({
        displayName:"",
    email: "",
    password:"",
    confirmPassword:""
})
    
}


    render() {
      
        return (
            <div className='sign-up'>
                <h2 className='title'>i do not have a account</h2>
                <span>Sign up with uour mail and password</span>
                <from className='sign-up-from' onSubmit={this.handleSubmit}>
                    <Forminput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handelchange}
                        label='display Name'
                        required  >

                    </Forminput>
                    <Forminput
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handelchange}
                        label='email'>

                    </Forminput>
                    <Forminput
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handelchange}
                        label='password'>

                    </Forminput>
                    <Forminput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handelchange}
                        label='confirmPassword'>

                    </Forminput>
                    <Costumbutom onClick={this.handleSubmit} type='submit' value='Submit Form' >
                    Sign in
                </Costumbutom>
                </from>

            </div>
        )
    }
}
