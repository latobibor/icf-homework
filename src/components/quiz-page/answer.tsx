import React, { useState } from 'react';
import './answer.scss';
import { AnswerIndex } from '../../shared-models/types';

interface AnswerProps {
  index: AnswerIndex;
  text: string;
  isRight?: boolean;
}

export function Answer({ index, text, isRight }: AnswerProps) {
  const [clicked, setClicked] = useState(false);

  let clickedOnRightAnswer;

  if (clicked) {
    clickedOnRightAnswer = isRight ? 'right' : 'wrong';
  }

  return (
    <div className={`answer ${clickedOnRightAnswer}`} onClick={() => setClicked(true)}>
      <div className="index">{index}</div>
      <div className="answer-value">{text}</div>
    </div>
  );
}
