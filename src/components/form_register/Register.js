import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './register_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';
import { register } from '../../services/api';

function Register() {
    useEffect(() => {
        var form = new Validator('#register-form')

        form.onSubmit = async (data) => {
            const response = await register(data.email, data.password)
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

    return (
        <div className="main register-container">
            <ToastContainer />
            <form action="" method="POST" className="register-form" id="register-form">
                <h3 className="heading">Sign up</h3>

                <div className="spacer"></div>

                {/* <FormGroup id="firstname" name="firstname" type="text" placeholder="First name" rules="required" title="First name" /> */}
                {/* <FormGroup id="name" name="name" type="text" placeholder="Name" rules="required" title="Name" /> */}
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