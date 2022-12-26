import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import NavBtn from "../Components/NavBtn";
import { useNavigate } from 'react-router-dom';
import methods from "../Lib/actCitingClient.js"
import '../Styles/account.css'

const Login = (props) => {

    const navigate = useNavigate();


    const [userData, setData] = useState({email: "", password: ""});
    

    const { register, handleSubmit, formState: { errors } } = useForm(userData);
    // const [data, setData] = useState();

    useEffect(() => {
        props.setToken();
    }, [])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // const token = await methods.loginUser({
    //     //     email,
    //     //     password
    //     // });
    //     let token = {email, password}
    //     props.setToken(token);
    //     console.log(token)
    //   }


    const submitForm = (data) => {
        setData(data);
        console.log(data);
        alert('You have successfully logged in!');
        props.setToken(data)
        navigate(`/MyAccount`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit((data) => submitForm(data))}>
                <div className='form'>
                    <h1>Venue Owner Log In</h1>
                    <br />
                    <br />
                    <label>Enter Your Details:</label>

                    <input type="text" {...register('user_email', { required: "Account email is required!", pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please enter the correct format' } })} placeholder="Email" />
                    <ErrorMessage errors={errors} name="user_email" as="p" />

                    {/* <label>Password:</label> */}
                    <input type="password" {...register('user_password', { required: "Password is required!" })} placeholder="Password"  />

                    <ErrorMessage errors={errors} name="user_password" as="p" />

                    <input className='form-submit-btn' type="submit" value="Log In" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <label>No account? Register for Ven-U now!</label>
                    <NavBtn name="Join Ven-U Now" link="Register"></NavBtn>

                </div>

            </form>
        </div >
    )
}
export default Login;