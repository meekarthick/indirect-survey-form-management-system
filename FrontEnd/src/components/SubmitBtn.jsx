import React from 'react'

const SubmitBtn = ({onClick}) => {
    return (
        <div className='FormBtndiv'>
            <button className='FormBtn' onClick={onClick}>SUBMIT</button>
        </div>
    )
}

export default SubmitBtn