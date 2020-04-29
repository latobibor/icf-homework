import React from 'react';
import './editor.scss';
import { useForm } from 'react-hook-form';
import { EditorInputs } from './shared-types';
import { AnswerEditor } from './answer-editor';
import { QuestionEditor } from './question-editor';

type Inputs = {
  [name in EditorInputs]: string;
};

function onSubmit(data: Inputs, { target }: any) {
  target.reset();
  console.log(data);
}

export function Editor() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>({ mode: 'onBlur' });

  return (
    <div className="editor">
      <h2>Add a new question</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-controls">
          <QuestionEditor register={register} />
          <AnswerEditor inputId={EditorInputs.AnswerA} register={register} />
          <AnswerEditor inputId={EditorInputs.AnswerB} register={register} />
          <AnswerEditor inputId={EditorInputs.AnswerC} register={register} />
          <AnswerEditor inputId={EditorInputs.AnswerD} register={register} />
          <div>
            <button type="submit" className="btn btn-lg btn-primary" disabled={!isValid}>
              Let's create it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
