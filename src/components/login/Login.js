import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Messages_%28macOS%29.svg' alt="iMessage-logo" />
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
