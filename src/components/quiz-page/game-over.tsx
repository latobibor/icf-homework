import React from 'react';
import { Score } from './score';
import './game-over.scss';

export function GameOver() {  
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <span className="result">You have scored <Score />.</span>
    </div>
  );
}
