import React from 'react';
import './question-footer.scss';
import { GlobalState } from '../../redux/global-state';
import { useSelector, useDispatch } from 'react-redux';
import { DispatchAction, Actions, NextQuestionAction } from '../../redux/root-reducer';

export function QuestionFooter() {
  const scoreFromState = useSelector<GlobalState, number>(({ score }) => score);
  const numberOfQuestions = useSelector<GlobalState, number>(({ questions }) => questions.length);

  const dispatch = useDispatch<DispatchAction<NextQuestionAction>>();

  function onClick() {
    dispatch({ type: Actions.NextQuestion });
  }

  return (
    <div className="question-footer">
      <div>
        <label>Score:</label>
        <span>{scoreFromState} / {numberOfQuestions}</span>
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
