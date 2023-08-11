import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './login_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { login } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        var form = new Validator('#login-form')
        form.onSubmit = function (data) {
            dispatch(login(data.email, data.password))
        }
    }, [])

    useEffect(() => {
        if (userInfo !== null) {
            toast(userInfo.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    })

    return (
        <div className="main login-container">
            <ToastContainer />
            <form action="" method="POST" className="login-form" id="login-form">
                <h3 className="heading">Sign in</h3>
                <h4 className='desc'>For security, please sign in to access your information</h4>

                <div className="spacer"></div>

                <FormGroup id="email" name="email" type="text" placeholder="Email" rules="required|email" title="Email" />
                <FormGroup id="password" name="password" type="password" placeholder="Password" rules="required|min:8" title="Password" />

                <input type="submit" value="Sign in" className="form-submit" />
                <div className='form-footer'>
                    <Link className='form-link' to={`/register`}>Create account</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;