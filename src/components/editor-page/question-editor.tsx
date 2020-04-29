import React from 'react';
import { EditorInputs } from './shared-types';

interface QuestionEditorProps {
  register: Function;
}

export function QuestionEditor({ register }: QuestionEditorProps) {
  return (
    <div>
      <label htmlFor={EditorInputs.Question}>The question</label>
      <input
        id={EditorInputs.Question}
        name={EditorInputs.Question}
        type="text"
        required
        className="form-control"
        ref={register({ required: true, minLength: 10 })}
      />
    </div>
  );
}
