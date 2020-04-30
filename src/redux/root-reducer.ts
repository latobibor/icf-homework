import { Reducer } from 'redux';
import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { GlobalState, initialState } from './global-state';

export enum Actions {
  _Init = '@@redux/INIT',
  AddQuestion = 'ADD QUESTION',
  DeleteQuestion = 'DELETE QUESTION',
  NewGame = 'NEW GAME',
  EvaluateAnswer = 'EVALUATE ANSWER',
  NextQuestion = 'NEXT QUESTION',
}

export interface Action {
  type: Actions;
}

export type DispatchAction<T extends Action> = (payload: T) => void;

export interface AddQuestionAction extends Action {
  type: Actions.AddQuestion;
  question: QuestionProps;
}

export interface DeleteQuestionAction extends Action {
  type: Actions.DeleteQuestion;
  questionIndex: number;
}

export interface NewGameAction extends Action {
  type: Actions.NewGame;
}

export interface EvaluateAnswerAction extends Action {
  type: Actions.EvaluateAnswer;
  wasTheRightAnswer: boolean;
  answerIndex: AnswerIndex;
}

export interface NextQuestionAction extends Action {
  type: Actions.NextQuestion;
}

// built-in redux action
export interface _InitAction extends Action {
  type: Actions._Init;
}

// todo: there should be a helper for this (written by me or a lib); this is not gonna scale
export type CombinedActionType =
  | AddQuestionAction
  | DeleteQuestionAction
  | NewGameAction
  | EvaluateAnswerAction
  | NextQuestionAction
  | _InitAction;

export const rootReducer: Reducer<GlobalState, CombinedActionType> = (
  state = initialState,
  action: CombinedActionType
): GlobalState => {
  if (action.type.toString().startsWith(Actions._Init.toString())) {
    return state;
  }

  switch (action.type) {
    case Actions.AddQuestion:
      return addQuestion(state, action);
    case Actions.DeleteQuestion:
      return deleteQuestion(state, action);
    case Actions.NewGame:
      return newGame(state);
    case Actions.EvaluateAnswer:
      return evaluateAnswer(state, action);
    case Actions.NextQuestion:
      return nextQuestion(state);
    default:
      throw new Error(`Event name ${action.type} was not recognized; please implement it`);
  }
};

function addQuestion(state: GlobalState, { question }: AddQuestionAction): GlobalState {
  return {
    ...state,
    questions: [...state.questions, question],
  };
}

function deleteQuestion(state: GlobalState, { questionIndex }: DeleteQuestionAction): GlobalState {
  const { questions } = state;

  return {
    ...state,
    questions: [...questions.slice(0, questionIndex), ...questions.slice(questionIndex + 1)],
  };
}

function newGame(state: GlobalState): GlobalState {
  // let's preserve questions
  const { questions } = state;

  return {
    ...initialState,
    questions,
  };
}

function evaluateAnswer(state: GlobalState, { wasTheRightAnswer, answerIndex }: EvaluateAnswerAction): GlobalState {
  return {
    ...state,
    score: state.score + (wasTheRightAnswer ? 1 : 0),
    isCurrentQuestionAnswered: true,
    lastAnswer: answerIndex,
  };
}

function nextQuestion(state: GlobalState): GlobalState {
  const { questions, activeQuestionIndex } = state;

  const gameOver = questions.length - 1 === activeQuestionIndex;

  if (gameOver) {
    return {
      ...state,
      gameOver,
    };
  }

  return {
    ...state,
    activeQuestionIndex: activeQuestionIndex + 1,
    isCurrentQuestionAnswered: false,
    lastAnswer: null,
  };
}
