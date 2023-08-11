import React, { useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import './register_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';

import { register } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

function Register() {
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        var form = new Validator('#login-form')

        form.onSubmit = function (data) {
            dispatch(register(data.firstname, data.lastname, data.email, data.password, "user"))
        }
    }, [])

    useEffect(() => {
        if (userInfo !== null) {
            toast(userInfo.message , {
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
        <div className="main register-container">
            <ToastContainer />
            <form action="" method="POST" className="register-form" id="login-form">
                <h3 className="heading">Sign up</h3>

                <div className="spacer"></div>

                <FormGroup id="firstname" name="firstname" type="text" placeholder="First name" rules="required" title="First name" />
                <FormGroup id="lastname" name="lastname" type="text" placeholder="Last name" rules="required" title="Last name" />
                <FormGroup id="email" name="email" type="email" placeholder="Email" rules="required|email" title="Email" />
                <FormGroup id="password" name="password" type="password" placeholder="Password" rules="required|min:8" title="Password" />
                <FormGroup id="confirm-password" name="confirm-password" type="password" placeholder="Confirm Password" rules="required|confirmed" title="Confirm Password" />

                <input type="submit" value="Sign up" className="form-submit" />
                <div className='form-footer'>
                    <Link className='form-link' to={`/login`}>Already have an account? Sign in</Link>
                </div>
            </form>
        </div>
    );
}


export default Register;