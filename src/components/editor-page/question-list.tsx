import React from 'react';
import { AnswerIndex, QuestionProps, AnswerProps } from '../../shared-models/types';

const dummyQuestions: QuestionProps[] = [
  {
    question: 'lol?',
    answers: {
      [AnswerIndex.A]: {
        text: 'Andras',
        isRight: true,
      },
      [AnswerIndex.B]: { text: 'Bela' },
      [AnswerIndex.C]: { text: 'Cili' },
      [AnswerIndex.D]: { text: 'Dezso' },
    },
  },
  {
    question: 'Wat!',
    answers: {
      [AnswerIndex.D]: {
        text: 'This is not a question?',
        isRight: true,
      },
      [AnswerIndex.C]: { text: 'Wut.' },
      [AnswerIndex.B]: { text: 'Lol.' },
      [AnswerIndex.A]: { text: 'Did you mean "what"?' },
    },
  },
];

export function QuestionList() {
  return (
    <div className="questions-list">
      {dummyQuestions.map(({ question, answers }) => (
        <QuestionItem question={question} answers={answers} key={question} />
      ))}
    </div>
  );
}

function QuestionItem({ question, answers }: QuestionProps) {
  return (
    <div className="question-item">
      <div className="question-header">
        <div>{question}</div>
        <div className="delete">
          <button className="btn btn-sm">X</button>
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
      {text}
    </div>
  );
}
