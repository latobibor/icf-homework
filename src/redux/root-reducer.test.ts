import {
  AddQuestionAction,
  Actions,
  rootReducer,
  DeleteQuestionAction,
  NewGameAction,
  StartGameAction,
  EvaluateAnswerAction,
  NextQuestionAction,
} from './root-reducer';
import { QuestionProps, AnswerIndex } from '../shared-models/types';
import { initialState, GlobalState } from './global-state';
import { defaultQuestions } from './default-questions';

describe('Root reducer tests', () => {
  describe('Question manipulation', () => {
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

      const firstState = initializeRootReducerWithNoQuestions();
      expect(firstState.questions).toHaveLength(0);

      const { questions } = rootReducer(firstState, action);
      expect(questions[0]).toEqual(question);
    });

    test('delete question action deletes question from list', () => {
      const indexOfQuestionToBeDeleted = 1;

      const firstState = initializeRootReducerWithDefaultQuestions();
      const secondQuestion = firstState.questions[indexOfQuestionToBeDeleted];

      expect(firstState.questions).toHaveLength(3);

      const action: DeleteQuestionAction = {
        type: Actions.DeleteQuestion,
        questionIndex: indexOfQuestionToBeDeleted,
      };

      const { questions } = rootReducer(firstState, action);

      expect(questions).not.toContain(secondQuestion);
      expect(questions).toHaveLength(2);
    });
  });

  describe('Starting and restarting the game', () => {
    test('new game actions resets properties related to game', () => {
      const modifiedGlobalState: GlobalState = {
        player: 'Some One',
        activeQuestionIndex: 3,
        score: 12,
        gameOver: true,
        isCurrentQuestionAnswered: true,
        lastAnswer: AnswerIndex.C,
        isInGameMode: true,
        questions: defaultQuestions,
      };

      const action: NewGameAction = {
        type: Actions.NewGame,
      };

      const resultState = rootReducer(modifiedGlobalState, action);

      expect(resultState.activeQuestionIndex).toEqual(initialState.activeQuestionIndex);
      expect(resultState.gameOver).toEqual(initialState.gameOver);
      expect(resultState.isCurrentQuestionAnswered).toEqual(initialState.isCurrentQuestionAnswered);
      expect(resultState.isInGameMode).toEqual(initialState.isInGameMode);
      expect(resultState.lastAnswer).toEqual(initialState.lastAnswer);
      expect(resultState.player).toEqual(initialState.player);
      expect(resultState.score).toEqual(initialState.score);
    });

    test('new game actions preserves questions', () => {
      const modifiedQuestions = defaultQuestions.slice(1);

      const modifiedGlobalState: GlobalState = {
        player: 'Some One',
        activeQuestionIndex: 3,
        score: 12,
        gameOver: true,
        isCurrentQuestionAnswered: true,
        lastAnswer: AnswerIndex.C,
        isInGameMode: true,
        questions: modifiedQuestions,
      };

      const action: NewGameAction = {
        type: Actions.NewGame,
      };

      const resultState = rootReducer(modifiedGlobalState, action);

      expect(resultState.questions).not.toEqual(initialState.questions);
      expect(resultState.questions).toEqual(modifiedQuestions);
    });

    test('start game sets player name and sets the isInGame mode flag', () => {
      const playerName = 'Tóth András Dániel';

      const action: StartGameAction = {
        type: Actions.StartGame,
        player: playerName,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      expect(firstState.player).toBeUndefined();
      expect(firstState.isInGameMode).toBeFalsy();

      const { player, isInGameMode } = rootReducer(firstState, action);

      expect(player).toEqual(playerName);
      expect(isInGameMode).toEqual(isInGameMode);
    });
  });

  describe('Game play reducers', () => {
    test('evaluate answers action adds score if the right answer was selected', () => {
      const selectedAnswerIndex = AnswerIndex.B;

      const action: EvaluateAnswerAction = {
        type: Actions.EvaluateAnswer,
        wasTheRightAnswer: true,
        answerIndex: selectedAnswerIndex,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      expect(firstState.score).toEqual(0);

      const { lastAnswer, score } = rootReducer(firstState, action);

      expect(lastAnswer).toEqual(selectedAnswerIndex);
      expect(score).toEqual(1);
    });

    test('evaluate answers action does not add score if not the right answer was selected', () => {
      const action: EvaluateAnswerAction = {
        type: Actions.EvaluateAnswer,
        wasTheRightAnswer: false,
        answerIndex: AnswerIndex.C,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      expect(firstState.score).toEqual(0);

      const { score } = rootReducer(firstState, action);

      expect(score).toEqual(0);
    });

    test('evaluate answers sets flag for current having been answered and its index', () => {
      const selectedAnswerIndex = AnswerIndex.B;

      const action: EvaluateAnswerAction = {
        type: Actions.EvaluateAnswer,
        wasTheRightAnswer: false,
        answerIndex: selectedAnswerIndex,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      expect(firstState.isCurrentQuestionAnswered).toBeFalsy();
      expect(firstState.lastAnswer).toBeFalsy();

      const { lastAnswer, isCurrentQuestionAnswered } = rootReducer(firstState, action);

      expect(lastAnswer).toEqual(selectedAnswerIndex);
      expect(isCurrentQuestionAnswered).toBeTruthy();
    });

    test('if last question was passed Next Question action moves game to game over', () => {
      const action: NextQuestionAction = {
        type: Actions.NextQuestion,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      expect(firstState.gameOver).toBeFalsy();

      const mutatedState = { ...firstState, activeQuestionIndex: firstState.questions.length - 1 };

      const { gameOver } = rootReducer(mutatedState, action);

      expect(gameOver).toBeTruthy();
    });

    test('Next Question action moves active question index and last answer states', () => {
      const action: NextQuestionAction = {
        type: Actions.NextQuestion,
      };

      const firstState = initializeRootReducerWithDefaultQuestions();
      const mutatedState = {
        ...firstState,
        activeQuestionIndex: 1,
        isCurrentQuestionAnswered: true,
        lastAnswer: AnswerIndex.D,
      };

      const { activeQuestionIndex, isCurrentQuestionAnswered, lastAnswer } = rootReducer(mutatedState, action);

      expect(activeQuestionIndex).toEqual(2);
      expect(isCurrentQuestionAnswered).toBeFalsy();
      expect(lastAnswer).toBeNull();
    });
  });
});

function initializeRootReducerWithNoQuestions(): GlobalState {
  return rootReducer({ ...initialState, questions: [] }, { type: Actions._Init });
}

function initializeRootReducerWithDefaultQuestions(): GlobalState {
  return rootReducer({ ...initialState, questions: defaultQuestions }, { type: Actions._Init });
}
