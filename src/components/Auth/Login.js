import React, { Component } from 'react'
import { AuthForm } from '../Styled/Forms'
import formHeader from '../../assets/images/form-header.jpg'
  
class Login extends Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        this.props.authUser(authData)
    }

    render() {
        return (
            <AuthForm onSubmit={this.submitHandler}>
                <img src={formHeader} className="header-form" alt="Register Now"/>
                <h1>Login</h1>
                <label>Email</label>
                <input type="email" value={this.state.email} name="email" onChange={this.changeHandler}/>
                <label>Password</label>            
                <input type='password' value={this.state.password} name="password" onChange={this.changeHandler}/>
                <input type='submit' value='Login'/>
            </AuthForm>
        )
    }
}

export default Login