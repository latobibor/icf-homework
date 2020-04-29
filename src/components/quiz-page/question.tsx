import React from 'react';
import './question.scss';
import { Answer } from './answer';
import { AnswerIndex } from '../../shared-models/types';

export function Question() {
  return (
    <div className="question">
      <div className="question-header">What is the capital of Moroshgovany?</div>
      <div className="answers">
        <Answer index={AnswerIndex.A} text="Qualny" isRight />
        <Answer index={AnswerIndex.B} text="Lakshmir" />
        <Answer index={AnswerIndex.C} text="Birya" />
        <Answer index={AnswerIndex.D} text="Lequir" />
      </div>
      <div className="question-footer">
        <button className="btn btn-primary">Next question</button>
      </div>
    </div>
  );
}
