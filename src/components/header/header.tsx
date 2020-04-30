import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../redux/global-state';
import { useSelector } from 'react-redux';

// maybe it's not the best name for clean coding but I love it :)
function isThereAnyQuestion(state: GlobalState): boolean {
  return state.questions.length > 0;
}

export function Header() {
  const shouldNewGameBeActive = useSelector<GlobalState, boolean>(isThereAnyQuestion);

  return (
    <header>
      <div className="header-menu disclaimer">by András Dániel Tóth</div>

      <Link to="/game" className={`${shouldNewGameBeActive ? '' : 'disabled'}`}>
        <div className="header-menu menu-item">New game!</div>
      </Link>

      <Link to="/edit">
        <div className="header-menu menu-item">Edit questions</div>
      </Link>
    </header>
  );
}
