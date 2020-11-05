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
    emailChange = e => this.stateString('email', e)
    passwordChange = e => this.stateString('password', e)
    verifyChange = e => this.stateString('verifyPassword', e)

    registerUser = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div className="Registration">
                <h3 className="reg-title">Registration</h3>
                <hr />
                <h3 className="app-title">Teach One</h3>
                <form className="reg-form" onSubmit={this.registerUser}>
                    <label htmlFor="username">Choose a username: </label>
                    <input
                        type="text"
                        className="userName"
                        id="nickname"
                        placeholder=" ex: seanshank"
                        value={this.state.newUser.username}
                        onChange={this.usernameChange} />
                    <br />
                    <label htmlFor="email">Enter your email: </label>
                    <input
                        type="email"
                        className="emailAddress"
                        id="emailAddy"
                        placeholder=" ex: youremail@email.com"
                        value={this.state.newUser.email}
                        onChange={this.emailChange} />
                    <br />
                    <label htmlFor="password">Create a password: </label>
                    <input
                        type="password"
                        className="userPassword"
                        id="userPass"
                        placeholder=" ex: pa$$word"
                        value={this.state.newUser.password}
                        onChange={this.passwordChange} />
                    <br />
                    <label htmlFor="password">Verify password: </label>
                    <input
                        type="password"
                        className="verifyUserPassword"
                        id="verifyUserPass"
                        placeholder=" ex: pa$$word copy"
                        value={this.state.newUser.verifyPassword}
                        onChange={this.verifyChange} />
                    <br />
                    <button type="submit" className="btn btn-primary subButton">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration 