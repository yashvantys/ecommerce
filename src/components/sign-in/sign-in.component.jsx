import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' handleChange={this.handleChange} name='email' id='email' label='email' value={this.state.email} />                    
                    <FormInput type='password' handleChange={this.handleChange} name='password' label='password' id='password' value={this.state.password} />                
                    <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}  isgooglesignin>
                        Sign In Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

