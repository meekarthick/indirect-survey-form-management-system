import React from 'react'
import { useState } from 'react'
const AlumniSurvey = ({department}) => {

    const [AlumniSurvey, setAlumniSurvey] = useState([])

    const handleAlumniSurveyRatings = (index, value) => {
        const updateValue = [...AlumniSurvey]
        updateValue[index] = value;
        setAlumniSurvey(updateValue)
    }
    const handleAlumniSurveysubmit = () => {

    }
    const AlumniSurveyTable = [
        { question: "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems." },
        { question: "Identify, formulate, research literature and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences." },
        { question: "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations." },
        { question: "Investigate complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of information to provide valid conclusions." },
        { question: "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
        { question: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice."},
        {question:  "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development."},
        {question: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice."},
        {question: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings."},
        {question: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions."},
        {question : "Demonstrate knowledge and understanding of engineering and management principles and apply these to one‟s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."},
        {question : "Recognize the need for and have the preparation and ability to Engage in independent and life- long learning in the broadest context of technological Change."}
    ]

    //department specific question

    const depData = [
        {
            Biomedical: [
                { question: "To focus on healthcare engineering that includes the study and understanding of biological systems." },
                { question: "To emphasize quantitative analysis and directly tying concepts with healthcare and diagnostics." },
                { question: "Practice professionally as biomedical engineers and/or biomedical scientists in the field of health care sector for the wellbeing of humankind." },
                { question: "Build careers addressing human health problems within a multidisciplinary, global industry." }
            ]
        },
        {
            Biotechnology: [
                { question: "To maintain high standards of teaching through innovative pedagogy for enabling students to be lifelong learners and globally competent professionals." },
                { question: "To foster creativity through innovation-based research activities for upliftment of self and society promoting socio-economic growth." },
                { question: "To inculcate professional ethics and skills amongst the graduates and empowering them to have career advancement through placements, higher studies, and entrepreneurs." }
            ]
        },
        {
            Aeronautical: [
                { question: "Utilize the knowledge of Aeronautical engineering in innovative, dynamic and challenging environment for design and development of new products." },
                { question: " Impart professional skills through simulation, language skills and general purposeCAE packages to solve practical problems of components in design and analysis to meet the airworthiness requirements for flight vehicles." },
                { question: "Fabricate, test and develop the products with more innovative technologies" }
            ]
        },
        {
            gri: [
                { question: "Model, design and analyze agricultural machineries and implement to increase productivity, improve land use and conserve resources like seed, water, fertilizer,pesticide and fuel" },
                { question: "To improvise better ways to minimize the crop loss from field damage during postharvest management and energy utilization, sorting, processing and packaging" }
            ]
        },
        {
            AIDS: [
                { question: "Ability to design and develop Artificial Intelligence algorithms, tools and techniques for solving real world problems." },
                { question: "Ability to identify and use appropriate analytical tools and techniques on massive datasets to extract information." },
            ]
        },
        {
            AIML: [
                { question: " Develop models in Data Science, Machine learning, deep learning and Big data technologies, using AI and modern tools." },
                { question: "Formulate solutions for interdisciplinary AI problems through acquired programming Knowledge in the respective domains fulfilling with real- time constraints." }
            ]
        },
        {
            Automobile: [
                { question: "An ability to design, analyze and find the solutions for automotive related problems." },
                { question: "An ability to use computer knowledge, IT for designing and improving the performance of the automobiles" }
            ]
        },
        {
            Civil: [
                { question: "Apply technical skills and modern engineering tools with critical thinking and innovations for solving civil engineering problems." },
                { question: "Design sustainable and smart infrastructure in the context of environmental, economical, and societal requirements and serve the community as ethical and responsible professionals" },
            ]
        },
        {
            CSBS: [
                { question: "To demonstrate the technical knowledge in Computer Science with equal appreciation of humanities, management sciences and human values" },
                { question: "To create, select, and apply appropriate techniques, resources, modern engineering and business tools including prediction and data analytics to complex engineering activities and business solutions" }
            ]
        },
        {
            CSD: [
                { question: ". Apply the skill of Design and Creative thinking to provide digital solutions to modern and complex engineering problems" },
                { question: "Apply the power of computing and digital media tools to provide solutions to challenging interactive technologies." },
                { question: "Acquire knowledge in diverse areas of Computer Science and Design to promote skills essential for career, entrepreneurship and higher studies." }
            ]
        },
        {
            CSE: [
                { question: "Apply suitable algorithmic thinking and data management practices to design, develop,and evaluate effective solutions for real-life and research problems." },
                { question: "Design and develop cost-effective solutions based on cutting-edge hardware and software tools and techniques to meet global requirements." }
            ]
        },
        {
            ComputerTechnology: [
                { question: "Demonstrate the knowledge and technical skills in software development." },
                { question: "Develop practical competencies in Software and Hardware Design" }
            ]
        },
        {
            EEE: [
                { question: "Modeling, design and analysis of Electrical & Electronic Systems using design principles and software tools." },
                { question: "Develop electrical machineries/Appliances for various Domestic and industrial needs" }
            ]
        },
        {
            ECE: [
                { question: "Able to apply the concepts of Electronics, Communication, Signal processing and VLSI in the design and implementation of application oriented engineering systems." },
                { question: "Able to solve complex engineering problems using state-of-the-art hardware and software tools, along with analytical and managerial skills to arrive appropriate solutions." }
            ]
        },
        {
            EIE: [
                { question: "Identify suitable sensors and design signal conditioning circuits to measure physical parameters for industrial applications" },
                { question: "Design, develop and realize advanced control schemes in different platforms such as microcontroller, PLC, SCADA, DCS and other modern controllers for next level of  automation" }
            ]
        },
        {
            FashionTechnology: [
                { question: "Interpret trends, decipher fashion movements, apply the knowledge of elements of design and Gestalt theory of visual perception; and incorporate sustainable  decisions into their design artworks, fashion products and accessories" },
                { question: "Articulate design aesthetics, communicate product values, collaborate across disciplines as member and leader; and envision solutions in fashion systems: design, technology, production and management. " }
            ]
        },
        {
            FoodTechnology: [
                { question: "Students will be able to conduct innovative and high-quality research to solve   emerging problems in food technology by applying scientific knowledge." },
                { question: "Practical and research training imparted to the students will pave way for introducing novel technologies in food processing sectors for global sustenance." }
            ]
        },
        {
            ISE: [
                { question: "Excel in processing the information using data management with security features." },
                { question: "Demonstrate and develop applications on data analysis." }
            ]
        },
        {
            IT: [
                { question: "Design and develop cost effective, secure, reliable IT, network and web based solutions with professional expertise in the domains including banking and healthcare and communications. " },
                { question: "Identify and analyze large and heterogeneous data by applying suitable machine and  deep learning algorithms and analytical tools to enable information retrieval and decision making in scientific and business applications." }
            ]
        },
        {
            Mechanical: [

                { question: ". Design, analyse and evaluate the performance of mechanical systems. " },
                { question: "Choose the appropriate methodology, materials, tools and machinery manufacture quality products at affordable cost " },
                { question: "Address all the fluid flow and energy transfer related problems of mechanical systems." }
            ]
        },
        {
            Mechatronics: [
                { question: "Analyze, design and develop electro mechanical systemusing contemporarytools" },
                { question: "2 Acclimate multidisciplinary approach to solve complex engineering problems associated with mechanical, controlsystems, robotics, drives and automation." }
            ]
        }
    ]

    //to filter questions based on department
        // to filter the department based on the user 

        const getDepartment = (department) => {
            const departmentData = depData.find(item => Object.keys(item)[0] === department);
            return departmentData ? Object.values(departmentData)[0] : [];
        }
    

    return (
        <div className='AlumniSurvey-maindiv'>
            <div className='AlumniSurvey-head'>
                <h2>Alumni Feedback</h2>
                <div className='AlumniSurveynote'>{`As a graduate of _________________ (Department Name) check the ability of yourself to the following statements and rate the performance on a 5-point scale with 5 - Strongly agree, 4- Agree , 3 - Partially agree, 2 - Neutral and 1-Disagree`}</div>
            </div>
            <form>
                <table className='AlumniSurvey-table'>
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
                          AlumniSurveyTable.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((value) => (
                                            <td key={value}>
                                                <div className='radio-container'>
                                                    <input
                                                        type='radio'
                                                        name={`AlumniSurvey-rating ${index + 1}`}
                                                        checked={AlumniSurvey[index] == value}
                                                        onChange={() => handleAlumniSurveyRatings(index, value)}
                                                    />
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                                                {
                            // table for department specific POS
                            department &&
                            getDepartment(department).map((depdata, idx) => (
                                <tr key={idx}>
                                    <td>{AlumniSurveyTable.length + idx + 1}</td>
                                    <td>{depdata.question}</td>
                                    {
                                        [5, 4, 3, 2, 1].map((depRat) => (
                                            <td key={depRat}>
                                                <div className='radio-container'>
                                                    <input
                                                        type="radio"
                                                        name={`specific-rating-${AlumniSurveyTable.length + idx + 1}`}
                                                        value={depRat}
                                                        checked={AlumniSurvey[idx] == depRat}
                                                        onChange={() => handleRatingChange(idx, depRat)}
                                                        className='radiobtn'
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
                <button className='FormBtn' onClick={handleAlumniSurveysubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default AlumniSurvey