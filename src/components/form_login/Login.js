import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import './login_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login, loginWithEmail } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
const REACT_APP_GG_APP_ID = '932157267245-bjpirg0kfni3domcv0oard0hcbl2f0n0.apps.googleusercontent.com'

function Login() {
    const authState = useSelector(state => state.authReducer)
    const userInfo = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showNotify, setShowNotify] = useState(false)

    useEffect(() => {
        var form = new Validator('#login-form')
        form.onSubmit = function (data) {
            dispatch(login(data.email, data.password))
            setShowNotify(true)
        }
    }, [])

    useEffect(() => {
        if (authState.loggedIn) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("user", JSON.stringify(userInfo))
            if (userInfo.role === 'admin') {
                setTimeout(() => {
                    navigate('/AdminPage')
                }, 2000)
            } else {
                setTimeout(() => {
                    navigate('/bookingpage')
                }, 2000)
            }
        }
    })

    useEffect(() => {
        if (showNotify) {
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
        }
    }, [userInfo])

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
                <LoginSocialGoogle
                    scope={'email'}
                    client_id={REACT_APP_GG_APP_ID || ''}
                    onResolve={({ provider, data }) => {
                        console.log(data)
                        dispatch(loginWithEmail(data.email))
                        setShowNotify(true)
                    }}
                    onReject={(err) => {
                    }}
                >
                    <GoogleLoginButton style={{ fontSize: '16px', width:'452px', margin: '0' }} />
                </LoginSocialGoogle>
                <div className='form-footer'>
                    <Link className='form-link' to={`/register`}>Create account</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;