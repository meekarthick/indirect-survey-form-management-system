import React from 'react'
import { useState } from 'react'
const ParentSurvey = () => {

    const [ParentSurvey, setParentSurvey] = useState([])

    const handleParentSurveyRatings = (index, value) => {
        const updateValue = [...ParentSurvey]
        updateValue[index] = value;
        setParentSurvey(updateValue)
    }
    const handleParentSurveysubmit = () => {

    }
    const ParentSurveyTable = [
        { question: "Interaction with the Department ." },
        { question: "Improvement in technical knowledge, soft skills, ethics and morality." },
        { question: "Faculty members, technical and non-technical staff members are cooperative." },
        { question: "Counseling and guidance." },
        { question: "Class room and Laboratory facilities." },
        { question: "ICT facilities." },
        { question: "Learning center facilities." },
        { question: "Transport facilities." },
        { question: "Hostel, Mess & Cafeteria facilities." },
    ]

    return (
        <div className='ParentSurvey-maindiv'>
            <div className='ParentSurvey-head'>
                <h2>Parent Feedback</h2>
                <div className='ParentSurveynote'>As a parent, give the feedback on a 5-point scale with Excellent, Very Good, Good, Average and poor</div>
            </div>
            <form>
                <table className='ParentSurvey-table'>
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>QUESTIONNAIRE</th>
                            <th>Strongly Agree</th>
                            <th>Agree</th>
                            <th>Partially Agree</th>
                            <th>Neutral</th>
                            <th>Disagree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ParentSurveyTable.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((value) => (
                                            <td key={value}>
                                                <div className='radio-container'>
                                                    <input
                                                        type='radio'
                                                        name={`ParentSurvey-rating ${index + 1}`}
                                                        checked={ParentSurvey[index] == value}
                                                        onChange={() => handleParentSurveyRatings(index, value)}
                                                    />
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>{ParentSurveyTable.length + 1}</td>
                            <td>Any other Feedback</td>
                            <td colSpan="5" className='feedback-div'>
                                <input
                                    type='text'
                                    className='feedback-box'
                                />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
            <div className='FormBtndiv'>
                <button className='FormBtn' onClick={handleParentSurveysubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ParentSurvey