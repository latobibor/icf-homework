import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { defaultQuestions } from './default-questions';

export type GlobalState = {
  activeQuestionIndex: number;
  questions: QuestionProps[];
  score: number;
  gameOver: boolean;
  isCurrentQuestionAnswered: boolean;
  lastAnswer: AnswerIndex | null;
};

export const initialState: GlobalState = {
  activeQuestionIndex: 0,
  questions: defaultQuestions,
  score: 0,
  gameOver: false,
  isCurrentQuestionAnswered: false,
  lastAnswer: null,
};
