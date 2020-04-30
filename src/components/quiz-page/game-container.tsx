import React from 'react';
import './game-container.scss';

import { Question } from './question';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/global-state';
import { GameOver } from './game-over';

export function GameContainer() {
  const gameOver = useSelector<GlobalState, boolean>(({ gameOver }) => gameOver);

  return (
    <div className="game-container">
      {!gameOver && <Question />}
      {gameOver && <GameOver />}
    </div>
  );
}
