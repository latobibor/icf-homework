import { QuestionProps } from '../shared-models/types';

const storageKey = 'QUIZ_GAME_QUESTIONS';

export function saveQuestions(questions: QuestionProps[]) {
  localStorage.setItem(storageKey, JSON.stringify(questions));
}

export function loadQuestions(): QuestionProps[] | null {
  const questions = localStorage.getItem(storageKey);

  if (questions === null) {
    return null;
  }

  return JSON.parse(questions) as QuestionProps[];
}
