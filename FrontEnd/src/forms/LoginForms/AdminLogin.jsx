import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bit_logo from '..//..//assets/images/bit_logo.png';
import google from '..//../assets/images/google.png';
import { useGoogleLogin } from '@react-oauth/google';

const AdminLogin = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const { access_token } = tokenResponse;
            // Fetch user info from Google UserInfo endpoint
            try {
                const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                const userInfo = await userInfoResponse.json();
                // setEmail(userInfo.email);
                console.log('User Info:', userInfo);
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
                    <h3>Welcome Back </h3>
                </div>
                <div className='login-logo'>
                    <img src={bit_logo} alt="Logo" />
                </div>
                <div className='googlebtn_div'>
                    <div>
                        <button className='google_btn' onClick={() => login()}> <img src={google} />sign in with Google </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin