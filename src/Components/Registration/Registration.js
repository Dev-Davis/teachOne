import React from 'react';
import './Registration.css';

const defaultUserInfo = {
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
}

class Registration extends React.Component {
    state = {
        newUser: defaultUserInfo
    }

    stateString = (name, e) => {
        const createNewUser = { ...this.state.newUser };
        createNewUser[name] = e.target.value;
        this.setState({ newUser: createNewUser })
    }

    usernameChange = e => this.stateString('username', e)
    usernameChange = e => this.stateString('email', e)
    usernameChange = e => this.stateString('password', e)
    usernameChange = e => this.stateString('verifyPassword', e)

    registerUser = (e) => {
        e.preventDefault();
        console.log('User registered')
    }

    render() {
        return (
            <div className="Registration">
                <h3 className="app-title">Registration</h3>
                <form className="reg-form" onSubmit={this.registerUser}>
                    <label htmlFor="username">Choose a username: </label>
                    <input type="text" className="userName" id="nickname" placeholder=" ex: seanshank" />
                    <br />
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" className="emailAddress" id="emailAddy" placeholder=" ex: youremail@email.com" />
                    <br />
                    <label htmlFor="password">Create a password: </label>
                    <input type="password" className="userPassword" id="userPass" placeholder=" ex: pa$$word" />
                    <br />
                    <label htmlFor="password">Verify password: </label>
                    <input type="password" className="verifyUserPassword" id="verifyUserPass" placeholder=" ex: pa$$word copy" />
                    <br />
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration 