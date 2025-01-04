import React from 'react'
import bit_logo from '..//../assets/images/bit_logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide
const StudentSignUp = () => {
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
                                    placeholder='Student name'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>Roll no</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Student Roll no'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>Department</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Student Department'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>Batch</span>
                                </label>
                                <input
                                    className='input-feild'
                                    type='text'
                                    placeholder='Passout year'
                                />
                            </div>
                            <div className='main'>
                                <label className='Name'>
                                    <span>E-mail</span>
                                </label>
                                <input   
                                className='input-feild'
                                type='e-mail'
                                placeholder='Bitsathy mail'
                                    
                                />
                            </div>
                            <div className='Sigup-submit'>
                                <button type='submit'>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSignUp