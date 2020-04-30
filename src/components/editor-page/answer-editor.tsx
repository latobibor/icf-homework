import React from 'react';
import { AnswerIndex } from '../../shared-models/types';
import { EditorInputs } from './shared-types';

interface AnswerEditorProps {
  inputId: EditorInputs;
  register: Function;
}

export function AnswerEditor({ inputId, register }: AnswerEditorProps) {
  const index = inputId.substr(inputId.length - 1).toUpperCase();
  const defaultRightAnswer = index === AnswerIndex.A;

  return (
    <div>
      <label htmlFor={inputId}>Answer {index}</label>
      <span className="tip">Required; at least a character long</span>
      <input
        id={inputId}
        name={inputId}
        ref={register({ required: true })}
        required
        type="text"
        className="form-control"
      />
      <div>
        Is this the right answer?{' '}
        <input
          type="radio"
          name="editor-answer-radio"
          ref={register({ required: true })}
          value={index}
          defaultChecked={defaultRightAnswer}
        />
      </div>
    </div>
  );
}
