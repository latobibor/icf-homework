import React from 'react';
import './app.scss';
import { Header } from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditorContainer } from './components/editor-page/editor-container';
import { NameOrGame } from './components/name-or-game';

function App() {
  return (
    <div className="main-container">
      <Router>
        <AppInsideRouter />
      </Router>
    </div>
  );
}

export function AppInsideRouter() {
  return (
    <>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <NameOrGame />
          </Route>
          <Route path="/edit">
            <EditorContainer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
