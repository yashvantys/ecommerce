import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''});
        } catch(error) {
            console.error(error);
        }
        
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' handleChange={this.handleChange} name='email' id='email' label='email' value={this.state.email} />                    
                    <FormInput type='password' handleChange={this.handleChange} name='password' label='password' id='password' value={this.state.password} />                
                    <ButtonsBarContainer >
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle}  isgooglesignin>
                        Sign In Google
                    </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;

