import React from 'react';

const UpdateQuestion = ({ questions, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Update Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <span>{question.question}</span>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateQuestion;