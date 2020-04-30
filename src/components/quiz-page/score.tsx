import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/global-state';

export function Score() {
  const score = useSelector<GlobalState, number>(({ score }) => score);
  const numberOfQuestions = useSelector<GlobalState, number>(({ questions }) => questions.length);

  return (
    <span>
      {score} / {numberOfQuestions}
    </span>
  );
}
