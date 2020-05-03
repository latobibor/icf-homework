import React from 'react';
import { AppInsideRouter } from './app';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { NameOrGame } from './components/name-or-game';
import { EditorContainer } from './components/editor-page/editor-container';

jest.mock('./components/new-game-page/new-game-page', () => ({
  NewGamePage: () => <div>NewGamePage</div>,
}));

jest.mock('./components/editor-page/editor-container', () => ({
  EditorContainer: () => <div>EditorContainer</div>,
}));

describe('main router test', () => {
  test('renders NameOrGame component on "/" path', () => {
    const app = renderApp('/');
    expect(app.find(NameOrGame)).toHaveLength(1);
  });

  test('renders EditorContainer component on "/edit" path', () => {
    const app = renderApp('/edit');
    expect(app.find(EditorContainer)).toHaveLength(1);
  });

  test('renders EditorContainer but not NameOrGame component on "/edit" path', () => {
    const app = renderApp('/edit');
    expect(app.find(EditorContainer)).toHaveLength(1);
    expect(app.find(NameOrGame)).toHaveLength(0);
  });
});

function renderApp(initialEntry: string) {
  return mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialEntry]}>
          <AppInsideRouter />
        </MemoryRouter>
      </Provider>
    );
}
