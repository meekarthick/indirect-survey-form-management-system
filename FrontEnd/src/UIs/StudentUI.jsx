import React from 'react'
import Header from '../components/Header'
import POpoints from '../components/POpoints'
import GraduateSurvey from '../forms/surveyforms/GraduateSurvey'
import CoCurricularForm from '../forms/surveyforms/CoCurricularForm'
import ExtraCurricular from '../forms/surveyforms/ExtraCurricular'

const StudentUI = () => {
  return (
    <div className='mainui'>
      <Header />
      <POpoints />
      <GraduateSurvey 
        department={'AIML'}
      />
      <CoCurricularForm
        department={'EIE'}
      />
      <ExtraCurricular
        department={'EIE'}
      />
    </div>
  )
}

export default StudentUI