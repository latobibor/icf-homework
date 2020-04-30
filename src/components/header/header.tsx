import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../redux/global-state';
import { useSelector, useDispatch } from 'react-redux';
import { NewGameAction, DispatchAction, Actions } from '../../redux/root-reducer';

// maybe it's not the best name for clean coding but I love it :)
function isThereAnyQuestion(state: GlobalState): boolean {
  return state.questions.length > 0;
}

export function Header() {
  const shouldNewGameBeActive = useSelector<GlobalState, boolean>(isThereAnyQuestion);
  const dispatch = useDispatch<DispatchAction<NewGameAction>>();

  function onNewGameClick() {
    dispatch({
      type: Actions.NewGame,
    });
  }

  return (
    <header>
      <div className="header-menu disclaimer">by András Dániel Tóth</div>

      <Link to="/game" className={`${shouldNewGameBeActive ? '' : 'disabled'}`}>
        <div className="header-menu menu-item" onClick={onNewGameClick}>
          New game!
        </div>
      </Link>

      <Link to="/edit">
        <div className="header-menu menu-item">Edit questions</div>
      </Link>
    </header>
  );
}
