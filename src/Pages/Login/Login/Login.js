import React from 'react';
import { Button} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} =useAuth();
    return (
        <div>
            <div className="height">
            <h2>Plase Login</h2>
            <Button onClick={signInUsingGoogle} variant="danger">Google SIGN IN</Button>
        </div>
        </div>
    );
};

export default Login;