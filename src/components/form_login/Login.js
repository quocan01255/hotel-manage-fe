import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import './login_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
// const REACT_APP_GG_APP_ID = '932157267245-bjpirg0kfni3domcv0oard0hcbl2f0n0.apps.googleusercontent.com'
const REACT_APP_GG_APP_ID = '478372342529-o6v0gv70ui7pqltdd0e3viaipe2hpmi0.apps.googleusercontent.com'

function Login() {
    const navigate = useNavigate();
    const [token, setToken] = useState()

    useEffect(() => {
        var form = new Validator('#login-form')
        form.onSubmit = async (data) => {
            const response = await login(data.email, data.password)
            localStorage.setItem("token", JSON.stringify(response.token))
            localStorage.setItem("id", JSON.stringify(response.user.userId))
            localStorage.setItem("role", JSON.stringify(response.user.userRole))
            setToken(response.token)
            showMsgBox(response.message)
        }
    }, [])

    const showMsgBox = useCallback((msg) => {
        toast(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }, [])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setTimeout(() => {
                navigate('/bookingpage')
            }, 2000)
        }
    }, [token])

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
                <hr />
                <div className='form-footer'>
                    <Link className='form-link' to={`/register`}>Create account</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;