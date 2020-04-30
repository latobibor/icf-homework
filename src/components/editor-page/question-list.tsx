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
      {questions.length > 0 &&
        questions.map((questionProps, index) => (
          <QuestionListItem questionProps={questionProps} index={index} key={index} />
        ))}
      {questions.length === 0 && <span>Please add questions as the quiz cannot start without questions :)</span>}
    </div>
  );
}
