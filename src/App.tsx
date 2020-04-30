import React from 'react';
import './app.scss';
import { Header } from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GameContainer } from './components/quiz-page/game-container';
import { EditorContainer } from './components/editor-page/editor-container';
import { NewGamePage } from './components/new-game-page/new-game-page';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <NewGamePage />
            </Route>
            <Route path="/game">
              <GameContainer />
            </Route>
            <Route path="/edit">
              <EditorContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
