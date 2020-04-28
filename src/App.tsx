import React from 'react';
import './app.scss';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/game">
            KONTENT
          </Route>
          <Route path="/edit">Edit</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
