import React from 'react'
import { useState } from 'react'
const ExtraCurricular = ({ department }) => {

    const [ExtraCurricular, setExtraCurricular] = useState([])

    const handleExtraCurricularRatings = (index, value) => {
        const updateValue = [...ExtraCurricular]
        updateValue[index] = value;
        setExtraCurricular(updateValue)
    }

    const handleExtraCurricularsubmit = () => {

    }

    const ExtraCurricularTable = [
        { question: "Ability to organize events as a leader or volunteer" },
        { question: "Ability to expose the talent as a group or an individual in state-level, national-level or international-level events" },
        { question: "Ability to participate in events which lead way to participate in next higher level events." },
        { question: "Ability to continue and expertise in the field of your interest." },
    ]

    return (
        <div className='ExtraCurricular-maindiv'>
            <div className='ExtraCurricular-head'>
                <h2>Extra Curricular Survey</h2>
                <div className='ExtraCurricularnote'>{`As a Student of ${department} check the ability of yourself to the following statements and rate the performance on a 5-point scale with 5 - Excellent, 4- Very Good, 3 - Good,  2 - Average and 1- Poor`}</div>
            </div>
            <form>
                <table className='ExtraCurricular-table'>
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
                            ExtraCurricularTable.map((data, points) => (
                                <tr key={points}>
                                    <td>{points + 1}</td>
                                    <td>{data.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((value) => (
                                            <td key={value}>
                                                <div className='radio-container'>
                                                    <input
                                                        type='radio'
                                                        name={`ExtraCurricular-rating ${points + 1}`}
                                                        checked={ExtraCurricular[points] == value}
                                                        onChange={() => handleExtraCurricularRatings(points, value)}
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
                <button className='FormBtn' onClick={handleExtraCurricularRatings}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ExtraCurricular