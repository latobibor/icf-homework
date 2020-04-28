import React from 'react';
import './answer.scss';

export enum AnswerIndex {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

interface AnswerProps {
  index: AnswerIndex;
  text: string;
}

export function Answer({ index, text }: AnswerProps) {
  return (
    <div className="answer">
      <div className="index">{index}</div>
      <div className="answer-value">{text}</div>
    </div>
  );
}
