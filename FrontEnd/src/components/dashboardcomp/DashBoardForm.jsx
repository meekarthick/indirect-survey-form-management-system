import React from 'react'
import { useState } from 'react'
const DashBoardForm = () => {
    const [userType, setUserType] = useState('');
    const [batch, setBatch] = useState('');
    const [department, setDepartment] = useState('');

    const handledashboardsubmit = (e) => {
        e.preventDefault();
        const formData = { userType };
        if (userType === 'student' || userType === 'alumni') {
            formData.batch = batch;
            formData.department = department;
        }
        onSubmit(formData)
    }

    return (
        <div className='dashboardFormain-div'>
            <form className='dashboardForm' onSubmit={handledashboardsubmit} >
                <label>
                   Select Respondant
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} className='options'>
                        <option value="" >Select</option>
                        <option value="student">Student</option>
                        <option value="alumni">Alumni</option>
                        <option value="employer">Employer</option>
                        <option value="parent">Parent</option>
                    </select>
                </label>
                {
                    (userType === 'student' || userType === 'alumni') && (
                        <>
                            <label>
                               Batch 
                                <input
                                    type="text"
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    placeholder="Enter Batch Number"
                                    className='dashboardForminputbox'
                                />
                            </label>
                            <label>
                                 Department
                                <input
                                    type="text"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    placeholder="Enter Department"
                                    className='dashboardForminputbox'
                                />
                            </label>
                        </>
                    )
                }
                    <button type="submit" className='dashboardformbutton'>Get Response</button>
            </form>
        </div>
    )
}

export default DashBoardForm