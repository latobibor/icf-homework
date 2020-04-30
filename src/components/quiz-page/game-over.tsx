import React from 'react';
import { Score } from './score';
import './game-over.scss';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/global-state';

export function GameOver() {
  const player = useSelector<GlobalState, string>(({ player }) => player + '');

  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <h2>Thanks for playing with us {player}</h2>
      <span className="result">
        You have scored <Score />.
      </span>
    </div>
  );
}
