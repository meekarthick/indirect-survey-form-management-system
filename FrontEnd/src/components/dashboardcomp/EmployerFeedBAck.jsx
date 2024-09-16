import React from 'react'
import { useState } from 'react';
import user from '../images/user.png'
const EmployerFeedBAck = () => {

    const [feedbacks] = useState([
        { employerName: 'John Doe', organization: 'Tech Innovations', feedbackText: 'I am deeply appreciative of the dedication and support shown to my child. I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Jane Smith', organization: 'Educational Enterprises', feedbackText: 'I am incredibly satisfied with the educational environment provided. I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Michael Brown', organization: 'Learning Hub', feedbackText: 'The faculty’s dedication and the supportive learning environment have been exceptional.' },
        { employerName: 'Emily Davis', organization: 'Academic Solutions', feedbackText: 'I am thankful for the constant support and the excellent facilities provided.' },
        { employerName: 'Chris Johnson', organization: 'Bright Future Academy', feedbackText: 'The performance and the overall experience have been commendable. I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Patricia Wilson', organization: 'EduCare', feedbackText: 'I am pleased with the development and progress observed.' },
        { employerName: 'Daniel Martinez', organization: 'Innovative Education', feedbackText: 'Your support and the quality of the educational experience have been outstanding. I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
        { employerName: 'Linda Garcia', organization: 'NextGen Learning', feedbackText: 'I am delighted with the overall program and the support my child has received.' },
        { employerName: 'Robert Lee', organization: 'Global Education', feedbackText: 'The resources and the support provided have been valuable.' },
        { employerName: 'Nancy Clark', organization: 'Success Academy', feedbackText: 'The program has been good, and I see areas where improvements can be made.' },
    ]);
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
        { question: "Life Skills (Time management and Prioritization)" },

    ]
    const [currentPage, setCurrentPage] = useState(1);
    const feedbacksPerPage = 5;

    // Determine the feedbacks to display on the current page
    const indexOfLastFeedback = currentPage * feedbacksPerPage;
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
    const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="parentsfeedbackmain-div">
            <div>
                <h1 className='parentsfeedback-head'>Employer Feedbacks</h1>
            </div>
            <div>
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
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                EmployerSurveyTable.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.question}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </form>
            </div>
            <div className='parentsgeneralfeedback-div'>
                <h1>General Feedbacks</h1>
            </div>
            <div className='feedbacksummary'>
                <ul className="parentfeedback-list">
                    {currentFeedbacks.map((feedback, index) => (
                        <li key={index} className="parentfeedback-item">
                            <div className='employerName-div'>
                                <span className='employerName'>
                                    <img src={user} alt='user' className='employerfeedbackuserimg' />
                                    {feedback.employerName}
                                </span>
                            </div>
                            <div className='employerOrganization-div'>
                                <span className='employerOrganization'>
                                    {feedback.organization}
                                </span>
                            </div>
                            <div>
                                <p>
                                    {feedback.feedbackText}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Pagination */}
                <Pagination
                    feedbacksPerPage={feedbacksPerPage}
                    totalFeedbacks={feedbacks.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
const Pagination = ({ feedbacksPerPage, totalFeedbacks, paginate, currentPage, setCurrentPage }) => {
    const [pageGroup, setPageGroup] = useState(1); // Current group of 5 pages
    const pagesPerGroup = 5;

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalFeedbacks / feedbacksPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Determine the pages to display in the current group
    const indexOfLastPageInGroup = pageGroup * pagesPerGroup;
    const indexOfFirstPageInGroup = indexOfLastPageInGroup - pagesPerGroup;
    const currentPageNumbers = pageNumbers.slice(indexOfFirstPageInGroup, indexOfLastPageInGroup);

    const handlePrevious = () => {
        if (pageGroup * pagesPerGroup - pagesPerGroup > 0)
            setCurrentPage(pageGroup * pagesPerGroup - pagesPerGroup)
        if (pageGroup > 1) {
            setPageGroup(pageGroup - 1);
        }
    };

    const handleNext = () => {
        if ((pageGroup * pagesPerGroup + 1) < totalPages)
            setCurrentPage(pageGroup * pagesPerGroup + 1)
        if (indexOfLastPageInGroup < totalPages) {
            setPageGroup(pageGroup + 1);
        }
    };

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a onClick={handlePrevious} href="#!" className="page-link" aria-disabled={pageGroup === 1}>
                        &laquo;
                    </a>
                </li>
                {currentPageNumbers.map((number) => (
                    <li key={number} className={currentPage === number ? 'page-itemactive' : 'page-item'}>
                        <a onClick={() => paginate(number)} href="#!" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a onClick={handleNext} href="#!" className="page-link" aria-disabled={indexOfLastPageInGroup >= totalPages}>
                        &raquo;
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default EmployerFeedBAck