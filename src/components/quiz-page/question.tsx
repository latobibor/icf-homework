import React from 'react';
import './question.scss';
import { Answer } from './answer';
import { AnswerIndex, QuestionProps } from '../../shared-models/types';
import { QuestionFooter } from './question-footer';
import { GlobalState } from '../../redux/global-state';
import { useSelector } from 'react-redux';

function getCurrentQuestion({ questions, activeQuestionIndex }: GlobalState): QuestionProps {
  return questions[activeQuestionIndex];
}

export function Question() {
  const { question, answers } = useSelector<GlobalState, QuestionProps>(getCurrentQuestion);

  return (
    <div className="question">
      <div className="question-header">
        <h3>{question}</h3>
      </div>
      <div className="answers">
        {Object.keys(answers)
          .sort()
          .map((key) => {
            const answerIndex = key as AnswerIndex;
            const { text, isRight } = answers[answerIndex];

            return <Answer index={answerIndex} text={text} isRight={isRight} key={key} />;
          })}
      </div>
      <QuestionFooter />
    </div>
  );
}
