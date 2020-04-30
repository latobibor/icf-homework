import React from 'react';
import { QuestionProps } from '../../shared-models/types';
import { QuestionListItem } from './question-list-item';
import { GlobalState } from '../../redux/global-state';
import { useSelector } from 'react-redux';

function getListOfQuestions(globalState: GlobalState): QuestionProps[] {
  return globalState.questions;
}

export function QuestionList() {
  const questions = useSelector<GlobalState, QuestionProps[]>(getListOfQuestions);

  return (
    <div className="questions-list">
      <h2>Questions currently in the quiz</h2>
      {questions.map(({ question, answers }) => (
        <QuestionListItem question={question} answers={answers} key={question} />
      ))}
    </div>
  );
}
