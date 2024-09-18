import React from 'react'
import bit_logo from '../components/images/bit_logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EmployerSignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <div className='SignUpmain-div'>
                <div className='Form-Div'>
                    <div className='sigup-logo'>
                        <img src={bit_logo} />
                    </div>
                    <div className='Signup-head'>
                        <h>Create Account</h>
                    </div>
                    <div>
                        <form>
                            <div className='main'>
                                <label className='Name'>
                                    <span>Name</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>username</span>
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
                            <div className='main'>
                                <label className='Name'>
                                    <span>Designation</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Enter your Designation'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>Organization</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Oragnization name'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>E-mail</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='e-mail'
                                    placeholder='Enter organization mail'
                                />
                            </div>
                            <div>
                                <Link to={'/employerlogin'} >Already have an account</Link>
                            </div>
                            <div className='Sigup-submit'>
                                <button type='submit'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerSignUp