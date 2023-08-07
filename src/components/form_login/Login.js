import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './login_style.css'
import FormGroup from '../../commons/FormGroup';
import Validator from '../../commons/validator';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Login() {
    useEffect(() => {
        var form = new Validator('#login-form')
        form.onSubmit = function (data) {
            // Call api and check account
            // fetch('https://my-json-server.typicode.com/tranhoaiviet/My-Json/accounts')
            //     .then((response) => response.json())
            //     .then((accounts) => {
            //         // Check if email is exist
            //         let isExist = accounts.find(account => account.email === data.email)
            //         if (!isExist) {
            //             toast.error("Email is not exist !", {
            //                 position: toast.POSITION.TOP_CENTER
            //             });
            //         } else {
            //             let checkAccount = accounts.find(account => account.email === data.email && account.password === data.password)
            //             if (checkAccount) {
            //                 toast.success("Login success !", {
            //                     position: toast.POSITION.TOP_CENTER
            //                 });
            //             } else {
            //                 toast.warn("Password is not correct !", {
            //                     position: toast.POSITION.TOP_CENTER
            //                 });
            //             }
            //         }
            //     })
            //     .catch((error) => {

            //     });
            
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