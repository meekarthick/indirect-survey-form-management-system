import React from 'react'
import Header from '../components/Header'
import POpoints from '../components/POpoints'
import GraduateSurvey from '../surveyforms/GraduateSurvey'
import CoCurricularForm from '../surveyforms/CoCurricularForm'
import ExtraCurricular from '../surveyforms/ExtraCurricular'

const StudentUI = () => {
  return (
    <div className='mainui'>
      <Header />
      <POpoints />
      <GraduateSurvey 
        department={'CSE'}
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