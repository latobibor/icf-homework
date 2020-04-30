import React from 'react';
import './question-footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchAction, Actions, NextQuestionAction } from '../../redux/root-reducer';
import { Score } from './score';
import { GlobalState } from '../../redux/global-state';

export function QuestionFooter() {
  const dispatch = useDispatch<DispatchAction<NextQuestionAction>>();
  const isCurrentQuestionAnswered = useSelector<GlobalState, boolean>(
    ({ isCurrentQuestionAnswered }) => isCurrentQuestionAnswered
  );

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
        {isCurrentQuestionAnswered && (
          <button className="btn btn-primary" onClick={onClick}>
            Next question
          </button>
        )}
      </div>
    </div>
  );
}
