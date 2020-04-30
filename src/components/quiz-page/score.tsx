import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/global-state';
import './score.scss';

export function Score() {
  const score = useSelector<GlobalState, number>(({ score }) => score);
  const numberOfQuestions = useSelector<GlobalState, number>(({ questions }) => questions.length);

  return (
    <button className="score btn btn-light" disabled>
      {score} / {numberOfQuestions}
    </button>
  );
}
