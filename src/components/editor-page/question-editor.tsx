import React, { useState, ChangeEvent } from 'react';
import { EditorInputs } from './shared-types';

interface QuestionEditorProps {
  register: Function;
}

export function QuestionEditor({ register }: QuestionEditorProps) {
  const minLength = 10;
  const [length, setLength] = useState<number>(0);

  function onChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setLength(value.length);
  }

  let lengthTooltip = `At least ${minLength} characters long please :)`;

  if (length >= minLength) {
    lengthTooltip = `You are all set! :)`;
  }

  if (length > 0 && length < minLength) {
    lengthTooltip = `Write at least ${minLength - length} more characters`;
  }

  return (
    <div>
      <label htmlFor={EditorInputs.Question}>The question</label>
      <span>{lengthTooltip}</span>
      <input
        id={EditorInputs.Question}
        name={EditorInputs.Question}
        type="text"
        required
        className="form-control"
        onChange={onChange}
        ref={register({ required: true, minLength })}
      />
    </div>
  );
}
