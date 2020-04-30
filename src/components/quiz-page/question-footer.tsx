import React from 'react';
import './question-footer.scss';
import { GlobalState } from '../../redux/global-state';
import { useSelector } from 'react-redux';

export function QuestionFooter() {
  const scoreFromState = useSelector<GlobalState, number>(({ score }) => score);

  return (
    <div className="question-footer">
      <div>
        <label>Score:</label>
        <span>{scoreFromState}</span>
      </div>
      <div>
        <button className="btn btn-primary">Next question</button>
      </div>
    </div>
  );
}
