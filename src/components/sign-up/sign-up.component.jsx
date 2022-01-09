import React, {Fragment} from 'react'

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password, confirmPassword, displayName } = this.state
        if (password !== confirmPassword) {
            alert('passwords do not match!')
            return;
        }

        try {
            // calls firebase method for creating new user, returns user auth object, same as with google signin
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            // call custom function for saving user in db
            await createUserProfileDocument(user, {displayName})
            // reset the state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error('error is', error)
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const { email, password, confirmPassword, displayName } = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    /><FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    /><FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    /><FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                        <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;