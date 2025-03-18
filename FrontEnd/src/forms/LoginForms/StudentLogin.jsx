import React from 'react';
import { useState } from 'react';
import bit_logo from '..//../assets/images/bit_logo.png';
import google from '..//../assets/images/google.png';
import { useGoogleLogin } from '@react-oauth/google';
import {useNavigate} from "react-router-dom"
const StudentLogin = () => {

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const { access_token } = tokenResponse;
            // Fetch user info from Google UserInfo endpoint
            try {
                const userInfoResponse = await fetch('http://localhost:3005/api/auth/google', { 
                    method: "POST", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({ token: access_token })
                });
                

                if(!userInfoResponse.ok){
                    console.log("Invalid Acccess")
                    alert("Invalid Mail ID")
                }
                else{
                    navigate('/')
                }

                const userInfo = await userInfoResponse.json();
                // setEmail(userInfo.email);

                console.log('Student Info:', userInfo);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
        onError: (error) => console.error('Google Login Error:', error),
    });


    return (
        <div className='Loginmain-div'>
            <div className='std-form'>
                <div className='heading'>
                    <h3>Welcome Back 🙌...</h3>
                </div>
                <div className='login-logo'>
                    <img src={bit_logo} alt="Logo" />
                </div>
                {/* <div id='signup-route-div'>
                    <Link to="/signup" className='signup-route'>Don't have an account ❓</Link>
                </div> */}
                <div className='googlebtn_div'>
                    <div>
                        <button className='google_btn' onClick={() => login()}> <img src={google} />sign in with Google </button>
                    </div>
                    <div className='login-des'>
                        <p><span>*</span>kindly Login using bitsathy account</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentLogin

