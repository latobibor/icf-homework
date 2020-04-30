import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../redux/global-state';
import { useSelector, useDispatch } from 'react-redux';
import { DispatchAction, NewGameAction, Actions } from '../../redux/root-reducer';

export function Header() {
  const shouldNewGameBeActive = useSelector<GlobalState, boolean>(({ questions }) => questions.length > 0);
  const dispatch = useDispatch<DispatchAction<NewGameAction>>();

  function onNewGameClick() {
    dispatch({ type: Actions.NewGame });
  }

  return (
    <header>
      <div className="header-menu disclaimer">by András Dániel Tóth</div>

      <Link to="/" className={`${shouldNewGameBeActive ? '' : 'disable-click'}`} onClick={onNewGameClick}>
        <div className="header-menu menu-item">New game!</div>
      </Link>

      <Link to="/edit">
        <div className="header-menu menu-item">Edit questions</div>
      </Link>
    </header>
  );
}
