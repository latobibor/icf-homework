import React from 'react';
import './answer.scss';
import { AnswerIndex } from '../../shared-models/types';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchAction, EvaluateAnswerAction, Actions } from '../../redux/root-reducer';
import { GlobalState } from '../../redux/global-state';

interface AnswerProps {
  index: AnswerIndex;
  text: string;
  isRight?: boolean;
}

export function Answer({ index, text, isRight }: AnswerProps) {
  const dispatch = useDispatch<DispatchAction<EvaluateAnswerAction>>();
  const lastAnswer = useSelector<GlobalState, AnswerIndex | null>(({ lastAnswer }) => lastAnswer);

  let clickedOnRightAnswer = '';

  if (lastAnswer === index) {
    clickedOnRightAnswer = ' ' + (isRight ? 'right' : 'wrong');
  }

  function onClick() {
    dispatch({
      type: Actions.EvaluateAnswer,
      wasTheRightAnswer: !!isRight,
      answerIndex: index
    });
  }

  return (
    <div className={`answer${clickedOnRightAnswer}`} onClick={onClick}>
      <div className="index">{index}</div>
      <div className="answer-value">{text}</div>
    </div>
  );
}
