import React from 'react';
import { useState } from 'react';
import bit_logo from '../components/images/bit_logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide
import { Link } from 'react-router-dom';
const EmployerLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='Loginmain-div'>
            <div className='Form-Div'>
                <div className='sigup-logo'>
                    <img src={bit_logo} alt="Logo" />
                </div>
                <div className='login-head'>
                    <h3>LogIn</h3>
                </div>
                <div>
                    <form>
                        <div className='login-main'>
                            <label className='Name'>
                                <span>Username</span>
                            </label>
                            <input
                                className='input-feild'
                                type='text'
                                placeholder='Enter username'
                            />
                        </div>
                        <div className='main'>
                            <label className='Name'>
                                <span>Password</span>
                            </label>
                            <div className='password-container'>
                                <input
                                    className='input-feild'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <button
                                    type='button'
                                    className='toggle-password'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div id='signup-route-div'>
                            <Link to="/employersignup" className='signup-route'>Don't have an account ❓</Link>
                        </div>
                        <div className='Sigup-submit'>
                            <button type='submit'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployerLogin