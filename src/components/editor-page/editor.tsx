import React from 'react';
import './editor.scss';
import { useForm } from 'react-hook-form';
import { EditorInputs } from './shared-types';
import { AnswerEditor } from './answer-editor';
import { QuestionEditor } from './question-editor';
import { useDispatch } from 'react-redux';
import { DispatchAction, AddQuestionAction, Actions } from '../../redux/root-reducer';
import { QuestionProps, AnswerIndex } from '../../shared-models/types';

type Inputs = {
  [name in EditorInputs]: string;
};

export function Editor() {
  const {
    register,
    handleSubmit,
    triggerValidation,
    formState: { isValid },
  } = useForm<Inputs>({ mode: 'onChange' });

  const dispatch = useDispatch<DispatchAction<AddQuestionAction>>();

  function onSubmit(data: Inputs, { target }: any) {
    const question = createQuestionPropFromInputData(data);

    dispatch({
      type: Actions.AddQuestion,
      question,
    });

    target.reset();
    triggerValidation();
  }

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
            <button type="submit" className={`btn btn-lg btn-${isValid ? 'primary' : 'secondary'}`} disabled={!isValid}>
              Let's create it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function createQuestionPropFromInputData(data: Inputs): QuestionProps {
  const radioButtonValue = data['editor-answer-radio'] as AnswerIndex;

  function isRightAnswer(answerIndex: AnswerIndex) {
    return answerIndex === radioButtonValue;
  }

  return {
    question: data['editor-question'],
    answers: {
      [AnswerIndex.A]: {
        text: data['editor-answer-a'],
        isRight: isRightAnswer(AnswerIndex.A),
      },
      [AnswerIndex.B]: {
        text: data['editor-answer-b'],
        isRight: isRightAnswer(AnswerIndex.B),
      },
      [AnswerIndex.C]: {
        text: data['editor-answer-c'],
        isRight: isRightAnswer(AnswerIndex.C),
      },
      [AnswerIndex.D]: {
        text: data['editor-answer-d'],
        isRight: isRightAnswer(AnswerIndex.D),
      },
    },
  };
}
