import React from 'react'
import EmployerSurvey from '../forms/surveyforms/EmployerSurvey'
import Header from '../components/Header'
const EmployerUI = () => {
    return (
        <div>
            <Header />
            <EmployerSurvey
                department={'EIE'}
            />
        </div>
    )
}

export default EmployerUI