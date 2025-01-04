import React from 'react'
import bitcoverimage from '../assets/images/bitcoverimage.jpeg'
const MainContent = () => {
    return (
        <div className='mainContent-div'>
            <div className='mainContent-Headdiv'>
                <h1>Indirect <span>Survey</span></h1>
            </div>
            <div className='mainContent-paradiv'>
               <div>
               <p>
                    This platform is committed to the systematic evaluation of Program Outcomes (POs) and Program Specific Outcomes (PSOs) 
                    attained by our students. Through the structured collection and analysis of feedback from key stakeholders—including students,
                     parents, employers, and alumni—this platform delivers comprehensive and actionable insights into the efficacy of our academic 
                     programs. These insights are instrumental in driving continuous improvements in pedagogical strategies and curriculum design,
                      thereby ensuring that our institution consistently upholds the highest standards of academic excellence and effectively equips 
                      students for success in their professional and personal endeavors.
                </p>
               </div>
               <div className='bitcoverimage-div'>
                    <img src={bitcoverimage} alt="Bannari Amman" />
               </div>
            </div>
        </div>
    )
}

export default MainContent