import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/global-state';
import { GameContainer } from './quiz-page/game-container';
import { NewGamePage } from './new-game-page/new-game-page';

export function NameOrGame() {
  const hasGameStarted = useSelector<GlobalState, boolean>(({ isInGameMode }) => isInGameMode);

  return <>
    { hasGameStarted && <GameContainer /> }
    { !hasGameStarted && <NewGamePage /> }
  </>;
}
