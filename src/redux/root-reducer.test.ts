import { AddQuestionAction, Actions, rootReducer } from './root-reducer';
import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { initialState, GlobalState } from './global-state';

describe('Root reducer tests', () => {
  test('add question action adds a question to the list', () => {
    const question: QuestionProps = {
      question: 'this is a test question',
      answers: {
        [AnswerIndex.A]: {
          text: 'a',
          isRight: true,
        },
        [AnswerIndex.B]: { text: 'b' },
        [AnswerIndex.C]: { text: 'c' },
        [AnswerIndex.D]: { text: 'd' },
      },
    };

    const action: AddQuestionAction = {
      type: Actions.AddQuestion,
      question,
    };

    const resultInitialState = rootReducer(createEmptyState(), { type: Actions._Init });
    expect(resultInitialState.questions).toHaveLength(0);

    const { questions } = rootReducer(resultInitialState, action);
    expect(questions[0]).toEqual(question);
  });
});

function createEmptyState(): GlobalState {
  return { ...initialState, questions: [] };
}
