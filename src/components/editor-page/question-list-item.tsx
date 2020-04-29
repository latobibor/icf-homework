import React from 'react';
import { AnswerIndex, QuestionProps, AnswerProps } from '../../shared-models/types';
import './question-list-item.scss';

export function QuestionListItem({ question, answers }: QuestionProps) {
  return (
    <div className="question-list-item">
      <div className="question-item-header">
        <label>{question}</label>
        <div className="delete">
          <button className="btn btn-sm btn-warning">X</button>
        </div>
      </div>
      <div className="answer-list">
        {Object.keys(answers)
          .sort()
          .map((key) => (
            <AnswerItem label={key} answer={answers[key as AnswerIndex]} key={key} />
          ))}
      </div>
    </div>
  );
}

interface AnswerItemProps {
  label: string;
  answer: AnswerProps;
}

function AnswerItem({ label, answer: { isRight, text } }: AnswerItemProps) {
  return (
    <div className={`answer${isRight ? ' right' : ''}`}>
      <label>{label}</label>
      <div className="answer-value">{text}</div>
    </div>
  );
}
