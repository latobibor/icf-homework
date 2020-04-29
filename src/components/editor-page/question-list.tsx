import React from 'react';
import { AnswerIndex, QuestionProps } from '../../shared-models/types';
import { QuestionListItem } from './question-list-item';

const dummyQuestions: QuestionProps[] = [
  {
    question: 'Wenn ist das Nunnstück git und Slotermeyer?',
    answers: {
      [AnswerIndex.A]: {
        text: 'Ja! Beiherhund das oder die Flipperwaldt gersput.',
        isRight: true,
      },
      [AnswerIndex.B]: { text: 'Nein' },
      [AnswerIndex.C]: { text: 'Was ist ein gersput?' },
      [AnswerIndex.D]: { text: 'Monty Python' },
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
  {
    question: 'How long does it take to cook pasta?',
    answers: {
      [AnswerIndex.B]: {
        text: 'Until it still has some consistency',
        isRight: true,
      },
      [AnswerIndex.C]: { text: '5 minutes' },
      [AnswerIndex.D]: { text: '10 minutes' },
      [AnswerIndex.A]: { text: '15 minutes' },
    },
  },
];

export function QuestionList() {
  return (
    <div className="questions-list">
      <h2>Questions currently in the quiz</h2>
      {dummyQuestions.map(({ question, answers }) => (
        <QuestionListItem question={question} answers={answers} key={question} />
      ))}
    </div>
  );
}
