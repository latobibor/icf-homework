export enum AnswerIndex {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export type QuestionProps = {
  question: string;
  answers: {
    [index in AnswerIndex]: AnswerProps;
  };
};

export type AnswerProps = {
  isRight?: boolean;
  text: string;
};
