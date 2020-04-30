import { QuestionProps, AnswerIndex } from '../shared-models/types';

export const defaultQuestions: QuestionProps[] = [
  {
    question: 'What is the capital of Ghana?',
    answers: {
      [AnswerIndex.D]: {
        text: 'Accra',
        isRight: true,
      },
      [AnswerIndex.C]: { text: 'Mogadishu' },
      [AnswerIndex.B]: { text: 'Lomé' },
      [AnswerIndex.A]: { text: 'Luanda' },
    },
  },
  {
    question: 'How long does it take to cook pasta?',
    answers: {
      [AnswerIndex.B]: {
        text: 'Depends when it became soft but a bit chewy (al dente)',
        isRight: true,
      },
      [AnswerIndex.C]: { text: '5 minutes' },
      [AnswerIndex.D]: { text: '10 minutes' },
      [AnswerIndex.A]: { text: '15 minutes' },
    },
  },
  {
    question: 'Wenn ist das Nunnstück git und Slotermeyer?',
    answers: {
      [AnswerIndex.A]: {
        text: 'Ja! Beiherhund das oder die Flipperwaldt gersput.',
        isRight: true,
      },
      [AnswerIndex.B]: { text: 'Nein' },
      [AnswerIndex.C]: { text: 'Was ist ein gersput?' },
      [AnswerIndex.D]: { text: 'Monty Python' },
    },
  },
];
