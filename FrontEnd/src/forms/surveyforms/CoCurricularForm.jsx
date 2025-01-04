import React from 'react'
import { useState } from 'react'
const CoCurricularForm = ({ department }) => {

    const [coCurricular, setcoCurricular] = useState([])

    const handleCoCuricularRatings = (index, value) => {
        const updateValue = [...coCurricular]
        updateValue[index] = value;
        setcoCurricular(updateValue)
    }
    const handleCoCurricularsubmit = () => {

    }
    const coCurricularTable = [
        { question: "Ability to implement ideas as a team and make it into a workable product." },
        { question: "Ability to communicate the right solutions effectively in the form of reports, presentation with its possibility of getting deployed." },
        { question: "Ability to write papers in standard format for journals." },
        { question: "Ability to organize events as a member or leader." },
        { question: "Ability to deliver the ideas effectively in public forum" },
        { question: "Ability to compete with others in events." }
    ]

    return (
        <div className='CoCurricular-maindiv'>
            <div className='CoCurricular-head'>
                <h2>Co-Curricular Survey</h2>
                <div className='cocurricularnote'>{`As a Student of ${department} check the ability of yourself to the following statements and rate the performance on a 5-point scale with 5 - Excellent, 4- Very Good, 3 - Good,  2 - Average and 1- Poor`}</div>
            </div>
            <form>
                <table className='CoCurricular-table'>
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
                            coCurricularTable.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((value) => (
                                            <td key={value}>
                                                <div className='radio-container'>
                                                    <input
                                                        type='radio'
                                                        name={`curriculat-rating ${index + 1}`}
                                                        checked={coCurricular[index] == value}
                                                        onChange={() => handleCoCuricularRatings(index, value)}
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
                <button className='FormBtn' onClick={handleCoCuricularRatings}>SUBMIT</button>
            </div>
        </div>
    )
}

export default CoCurricularForm