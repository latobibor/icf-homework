import React from 'react';
import './question-footer.scss';
import { useDispatch } from 'react-redux';
import { DispatchAction, Actions, NextQuestionAction } from '../../redux/root-reducer';
import { Score } from './score';

export function QuestionFooter() {
  const dispatch = useDispatch<DispatchAction<NextQuestionAction>>();

  function onClick() {
    dispatch({ type: Actions.NextQuestion });
  }

  return (
    <div className="question-footer">
      <div>
        <label>Score:</label>
        <Score />
      </div>
      <div>
        {true && (
          <button className="btn btn-primary" onClick={onClick}>
            Next question
          </button>
        )}
      </div>
    </div>
  );
}
