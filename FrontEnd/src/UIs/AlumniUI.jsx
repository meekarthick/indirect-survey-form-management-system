import React from 'react'
import AlumniSurvey from '../forms/surveyforms/AlumniSurvey'
import Header from '../components/Header'
const AlumniUI = () => {
  return (
    <div>
      <Header />
      <AlumniSurvey
        department={'AIML'}
      />
    </div>
  )
}

export default AlumniUI