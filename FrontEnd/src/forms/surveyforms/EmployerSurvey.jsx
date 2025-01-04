import React from 'react'
import { useState } from 'react'
const EmployerSurvey = ({ department }) => {

    const [EmployerSurvey, setEmployerSurvey] = useState([])

    const handleEmployerSurveyRatings = (index, value) => {
        const updateValue = [...EmployerSurvey]
        updateValue[index] = value;
        setEmployerSurvey(updateValue)
    }
    const handleEmployerSurveysubmit = () => {

    }
    const EmployerSurveyTable = [
        { question: "Problem Solving / Programming Skill." },
        { question: "Critical Thinking/Analytical Skill." },
        { question: "Ability to design and develop solutions with a comprehension of the design trade-offs involved." },
        { question: "Knowledge about contemporary fields." },
        { question: "System Engineering Skills (for building Hardware/Software/Products/Designs)" },
        { question: "Exposure to the impact of Information and Communication Technology (ICT) solutions on the environment and Society." },
        { question: "Knowledge of sustainable product development." },
        { question: "Ethical Conduct/Ethical behaviour." },
        { question: "Coordination and collaboration." },
        { question: "Communication." },
        { question: "Project management Skills." },
        { question: "Life Skills (Time management and Prioritization)" }
    ]

    return (
        <div className='EmployerSurvey-maindiv'>
            <div className='EmployerSurvey-head'>
                <h2>Employer Feedback</h2>
                <div className='EmployerSurveynote'>As an employer rate the performance of our students on a 5-point scale with 5 - Excellent, 4- Very Good, 3 - Good,  2 - Average and 1- Poor</div>
            </div>
            <form>
                <table className='EmployerSurvey-table'>
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
                            EmployerSurveyTable.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((value) => (
                                            <td key={value}>
                                                <div className='radio-container'>
                                                    <input
                                                        type='radio'
                                                        name={`EmployerSurvey-rating ${index + 1}`}
                                                        checked={EmployerSurvey[index] == value}
                                                        onChange={() => handleEmployerSurveyRatings(index, value)}
                                                    />
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
            <div className='FormBtndiv'>
                <button className='FormBtn' onClick={handleEmployerSurveysubmit}>SUBMIT</button>
            </div>
            <div>
                <div className='ParentSurvey-head'>
                    <h2>General Feedback</h2>
                    <div className='ParentSurveynote'>Kindly provide your valuable insights to improve the skills for students</div>
                </div>
                <form className='feedbackBox-main'>
                    <textarea
                        type='text'
                        className='feedback-box'
                    />
                    <div className='GeneralFBbutto-div'>
                        <button className='FeedbackFormBtn'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployerSurvey