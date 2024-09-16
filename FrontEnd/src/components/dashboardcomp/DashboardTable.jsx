import React from 'react'

const DashboardTable = () => {

    const data = [
        'Engineering Knowledge',
        'Problem Analysis',
        'Design/ Development of Solutions',
        'Conduct Investigations of Complex Problems',
        'Modern Tool Usage',
        'The Engineer and Society',
        'Environment and Sustainability',
        'Ethics',
        'Individual and Team Work',
        'Communication',
        'Project Management and Finance',
        'Life-long Learning'
    ];
    return (
        <div className='dashboardtablemain-div'>
            <div className='studentscountmain-div'>
                <div className='studentscountsub-div'>
                    <div className='studentscountbox-div'>
                        <p>Total number of students</p>
                        <p className='count'>0</p>
                    </div>
                </div>
                <div className='studentscountsub-div'>
                    <div className='studentscountbox-div'>
                        <p>Number of students filled</p>
                        <p className='count'>0</p>
                    </div>
                </div>
            </div>
            <table className='survey-table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Program Outcomes</th>
                        <th>Student Survey</th>
                        <th>Extra Curricular Survey</th>
                        <th>CoCurricular Survey</th>
                        <th>Alumni Survey</th>
                        <th>Employer Survey</th>
                        <th>Parent Survey</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                            <td>-</td>
                            <td>{/* Data for Extra Curricular Survey */}</td>
                            <td>{/* Data for Co-Curricular Survey */}</td>
                            <td>{/* Data for Alumni Survey */}</td>
                            <td>{/* Data for Employer Survey */}</td>
                            <td>{/* Data for Parent Survey */}</td>
                            <td>{/* Average Rating */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable