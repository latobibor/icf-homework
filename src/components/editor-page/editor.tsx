import React from 'react';
import './editor.scss';
import { useForm, CustomElement } from 'react-hook-form';

/*
  // might be useful soon
 {Object.keys(AnswerIndex).map(key => (<AnswerEditor key={key} index={key as AnswerIndex} />))} 
 */

enum EditorInputs {
  Question = 'editor-question',
  AnswerA = 'editor-answer-a',
  AnswerB = 'editor-answer-b',
  AnswerC = 'editor-answer-c',
  AnswerD = 'editor-answer-d',
}

type Inputs = {
  [name in EditorInputs]: string;
};

type ReactHookFormReference = (
  ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement<Inputs> | null
) => void;

function onSubmit(data: Inputs) {
  console.log(data);
}

export function Editor() {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <div className="editor">
      <h2>Add a new question</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-controls">
          <QuestionEditor reference={register()} />
          <AnswerEditor inputId={EditorInputs.AnswerA} reference={register()} />
          <AnswerEditor inputId={EditorInputs.AnswerB} reference={register()} />
          <AnswerEditor inputId={EditorInputs.AnswerC} reference={register()} />
          <AnswerEditor inputId={EditorInputs.AnswerD} reference={register()} />
          <div>
            <button type="submit" className="btn btn-lg btn-primary">
              Let's create it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

interface AnswerEditorProps {
  inputId: EditorInputs;
  reference: ReactHookFormReference;
}

function AnswerEditor({ inputId, reference }: AnswerEditorProps) {
  const index = inputId.substr(inputId.length - 1).toUpperCase();

  return (
    <div>
      <label htmlFor={inputId}>Answer {index}</label>
      <input id={inputId} name={inputId} ref={reference} required type="text" className="form-control" />
      <div>
        Is this the right answer? <input type="checkbox" />
      </div>
    </div>
  );
}

interface QuestionEditorProps {
  reference: ReactHookFormReference;
}

function QuestionEditor({ reference }: QuestionEditorProps) {
  return (
    <div>
      <label htmlFor={EditorInputs.Question}>The question</label>
      <input
        id={EditorInputs.Question}
        name={EditorInputs.Question}
        type="text"
        required
        minLength={10}
        className="form-control"
        ref={reference}
      />
    </div>
  );
}
