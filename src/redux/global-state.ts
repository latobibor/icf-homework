import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { defaultQuestions } from './default-questions';
import { loadQuestions } from './storage';

export type GlobalState = {
  activeQuestionIndex: number;
  questions: QuestionProps[];
  score: number;
  gameOver: boolean;
  isCurrentQuestionAnswered: boolean;
  lastAnswer: AnswerIndex | null;
  player: string | undefined;
};

const localStorageQuestions = loadQuestions();

export const initialState: GlobalState = {
  player: undefined,
  activeQuestionIndex: 0,
  questions: localStorageQuestions ? localStorageQuestions : defaultQuestions,
  score: 0,
  gameOver: false,
  isCurrentQuestionAnswered: false,
  lastAnswer: null,
};
