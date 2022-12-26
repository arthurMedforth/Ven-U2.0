import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import NavBtn from "../Components/NavBtn";
import { useNavigate } from 'react-router-dom';
import '../Styles/account.css'

const Register = (props) => {

    const navigate = useNavigate();

    const defaultData = {
        user_email: "",
        user_id: "",
    }

    const { register, handleSubmit, formState: { errors } } = useForm(defaultData);
    const [data, setData] = useState();

    const submitForm = (data) => {
        setData(data);
        alert('You have successfully registered!');
        props.setToken(data)
        navigate(`/MyAccount`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit((data) => submitForm(data))}>
                <div className='form'>
                    <h1>Register for a Ven-U Account</h1>

                    <label>Email:</label>
                    <input type="text" {...register('account_email', { required: "Account email is required!", pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please enter the correct format' } })} placeholder="Your Email" />
                    <ErrorMessage errors={errors} name="account_email" as="p" />

                    <label>First Name:</label>
                    <input type="text" {...register('user_password', { required: "Password is required!" })} placeholder="Your First Name" />
                    <ErrorMessage errors={errors} name="user_password" as="p" />

                    <label>Last Name:</label>
                    <input type="text" {...register('user_password', { required: "Password is required!" })} placeholder="Your Last Name" />
                    <ErrorMessage errors={errors} name="user_password" as="p" />

                    <label>Password:</label>
                    <input type="password" {...register('user_password', { required: "Password is required!" })} placeholder="Password" />
                    <ErrorMessage errors={errors} name="user_password" as="p" />

                    <label>Re-type Password:</label>
                    <input type="password" {...register('user_password', { required: "Password is required!" })} placeholder="Password" />
                    <ErrorMessage errors={errors} name="user_password" as="p" />
                    <br />
                    <br />
                    <br />

                    <input className='form-submit-btn' type="submit" value="Register" />

                    <label>Already got an account? Log in here:</label>
                    <NavBtn name="Login" link="Login"></NavBtn>

                </div>

            </form>
        </div >
    )
}
export default Register;