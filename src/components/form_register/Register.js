import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './register_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';

import { register } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux'

function Register() {
    const userInfo = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const [showNotify, setShowNotify] = useState(false)
    const [msg, setMsg] = useState('');

    useEffect(() => {
        var form = new Validator('#register-form')

        form.onSubmit = async (data) => {
            // dispatch(register(data.email, data.password, "user"))
            const response = await register(data.email, data.password)
            // setMsg(response.message)
            showMsgBox(response.message)
            // setShowNotify(true)
        }
    }, [])

    const showMsgBox = useCallback((msg) => {
        toast(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }, [])

    // console.log(msg)

    // useEffect(() => {
    //     if (showNotify) {
    //         if (userInfo !== null) {
    //             toast(userInfo.message , {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //                 hideProgressBar: true,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             });
    //         }
    //     }
    // }, [userInfo])

    // useEffect(() => {
    //     toast(msg, {
    //         position: "top-center",
    //         autoClose: 3000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // }, [msg])

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