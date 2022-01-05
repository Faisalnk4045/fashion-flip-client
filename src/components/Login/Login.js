import React from 'react';
import { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const { processLogin, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';


    const handleRegistration = (event) => {
        event.preventDefault();
        processLogin(email, password, history, redirect_url);
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card p-3">
                <div className="card-body">
                    <div className="text-center mb-4">
                        <h4 className="card-title">Sign In</h4>
                    </div>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Email address</label>
                            <input onBlur={handleEmailField} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="inputPassword3" className="form-label">Password</label>
                            <input onBlur={handlePasswordField} type="password" className="form-control" id="inputPassword3" required />
                            <p className='text-danger'>{error}</p>
                        </div>
                        <p className='text-muted'>New member? <span><Link className='text-danger text-decoration-none' to='/register'> Sign up now</Link></span></p>
                        <button type="submit" className="btn btn-success btn-sm w-100">Sign In</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;