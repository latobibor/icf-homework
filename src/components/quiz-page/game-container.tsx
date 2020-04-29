import React from 'react';
import './game-container.scss';

import { Question } from './question';

export function GameContainer() {
  return <div className="game-container">
    <Question />
  </div>
}
