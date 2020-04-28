import React from 'react';
import './app.scss';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GameContainer } from './components/game-container';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/game">
              <GameContainer />
            </Route>
            <Route path="/edit">Edit</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
