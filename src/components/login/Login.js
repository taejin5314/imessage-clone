import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Messages_%28macOS%29.svg' alt="iMessage-logo" />
                <h1>iMessage</h1>
            </div>

            <Button>Sign In</Button>
        </div>
    )
}

export default Login
