import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { defaultQuestions } from './default-questions';
import { loadQuestions } from './storage';

// states unique for every game
export type PerGameState = {
  activeQuestionIndex: number;
  score: number;
  gameOver: boolean;
  isCurrentQuestionAnswered: boolean;
  lastAnswer: AnswerIndex | null;
  player: string | undefined;
  isInGameMode: boolean;
};

export type ApplicationWideState = { questions: QuestionProps[] };

export type GlobalState = PerGameState & ApplicationWideState;

const localStorageQuestions = loadQuestions();

export const initialGameState = {
  player: undefined,
  activeQuestionIndex: 0,
  score: 0,
  gameOver: false,
  isCurrentQuestionAnswered: false,
  lastAnswer: null,
  isInGameMode: false,
};

export const initialQuizState = {
  questions: localStorageQuestions ? localStorageQuestions : defaultQuestions,
};

export const initialState: GlobalState = Object.assign({}, initialGameState, initialQuizState);
