import React from 'react';
import { AnswerIndex, QuestionProps, AnswerProps } from '../../shared-models/types';
import './question-list-item.scss';
import { useDispatch } from 'react-redux';
import { DispatchAction, DeleteQuestionAction, Actions } from '../../redux/root-reducer';

interface QuestionListItemProps {
  questionProps: QuestionProps;
  index: number;
}

export function QuestionListItem({ index, questionProps: { question, answers } }: QuestionListItemProps) {
  const dispatch = useDispatch<DispatchAction<DeleteQuestionAction>>();

  function onClick() {
    dispatch({
      type: Actions.DeleteQuestion,
      questionIndex: index,
    });
  }

  return (
    <div className="question-list-item">
      <div className="question-item-header">
        <label>{question}</label>
        <div className="delete">
          <button className="btn btn-sm btn-warning" onClick={onClick}>
            Delete
          </button>
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
