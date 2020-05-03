import React from 'react';
import { render, act, fireEvent, Matcher, MatcherOptions } from '@testing-library/react';
import { NewGamePage } from './new-game-page';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Actions } from '../../redux/root-reducer';

type GetByTestIdFunction = (
  text: Matcher,
  options?: MatcherOptions | undefined,
  waitForElementOptions?: unknown
) => HTMLElement;

const mockStore = configureStore([]);
let mockDispatch = jest.fn();

describe('NewGamePage', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('Start Game button is disabled when there are no questions', async () => {
    const { getByTestId } = createNewGamePage();

    const startGameButton = await getStartGameButton(getByTestId);
    expect(startGameButton).toHaveAttribute('disabled');
  });

  test('Start Game button is disabled when there is less than 2 character text in name input', async () => {
    const someQuestions = ['random value'];
    const { getByTestId } = createNewGamePage(someQuestions);

    const startGameButton = await writeIntoNameInputAndGetStartButton(getByTestId, 'a');

    expect(startGameButton).toHaveAttribute('disabled');
  });

  test('Start Game button is enabled when there is at least one question and two characters in name input', async () => {
    const someQuestions = ['random value'];
    const { getByTestId } = createNewGamePage(someQuestions);

    const startGameButton = await writeIntoNameInputAndGetStartButton(getByTestId, '形意');

    expect(startGameButton).not.toHaveAttribute('disabled');
  });

  test('Pressing Start game dispatches New Game action', async () => {
    const someQuestions = ['random value'];
    const { getByTestId } = createNewGamePage(someQuestions);
    const validName = 'valid name';

    const startGameButton = await writeIntoNameInputAndGetStartButton(getByTestId, validName);

    await act(async () => {
      fireEvent(startGameButton, new MouseEvent('click'));
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: Actions.StartGame,
      player: validName,
    });
  });
});

async function getStartGameButton(getByTestId: GetByTestIdFunction): Promise<HTMLElement> {
  let startGameButton;

  await act(async () => {
    startGameButton = getByTestId('start-game-button');
  });

  if (!startGameButton) {
    throw new Error('start game was not initialized during act');
  }

  return startGameButton;
}

async function writeIntoNameInputAndGetStartButton(
  getByTestId: GetByTestIdFunction,
  inputValue: string
): Promise<HTMLElement> {
  const startGameButton = await getStartGameButton(getByTestId);

  await act(async () => {
    const nameInput = getByTestId('player');
    writeIntoNameInput(nameInput, inputValue);
  });

  return startGameButton;
}

// when we don't want to depend on implementation details, it is fine to use `any`
function createNewGamePage(questions: any[] = []) {
  const store = mockStore({
    questions,
  });

  store.dispatch = mockDispatch;

  return render(
    <Provider store={store}>
      <NewGamePage />
    </Provider>
  );
}

function writeIntoNameInput(nameInput: any, value: string) {
  fireEvent.input(nameInput, {
    target: {
      value,
    },
  });
}
