import React, { useState } from 'react';
import './answer.scss';
import { AnswerIndex } from '../../shared-models/types';
import { useDispatch } from 'react-redux';
import { DispatchAction, EvaluateAnswerAction, Actions } from '../../redux/root-reducer';

interface AnswerProps {
  index: AnswerIndex;
  text: string;
  isRight?: boolean;
}

export function Answer({ index, text, isRight }: AnswerProps) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch<DispatchAction<EvaluateAnswerAction>>();

  let clickedOnRightAnswer = '';

  if (clicked) {
    clickedOnRightAnswer = ' ' + (isRight ? 'right' : 'wrong');
  }

  function onClick() {
    setClicked(true);

    dispatch({
      type: Actions.EvaluateAnswer,
      wasTheRightAnswer: !!isRight,
    });
  }

  return (
    <div className={`answer${clickedOnRightAnswer}`} onClick={onClick}>
      <div className="index">{index}</div>
      <div className="answer-value">{text}</div>
    </div>
  );
}
