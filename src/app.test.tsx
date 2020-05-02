import React from 'react';
import App from './app';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { NameOrGame } from './components/name-or-game';
import { act } from 'react-dom/test-utils';

jest.mock('./components/new-game-page/new-game-page', () => ({
  NewGamePage: () => <div>NewGamePage</div>,
}));

let app: any;

describe('main router test', () => {
  test('renders NameOrGame component on "/" path', () => {
    renderApp('/');
    expect(app.find(NameOrGame)).toHaveLength(1);
  });
});

function renderApp(initialEntry: string) {
  act(() => {
    app = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialEntry]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
}
