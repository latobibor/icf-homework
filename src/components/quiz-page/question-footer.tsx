import React from 'react';
import './question-footer.scss';

export function QuestionFooter() {
  return (
    <div className="question-footer">
      <div>
        <label>Score:</label>
        <span>5</span>
      </div>
      <div>
        <button className="btn btn-primary">Next question</button>
      </div>
    </div>
  );
}
