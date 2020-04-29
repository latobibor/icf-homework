import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="header-menu disclaimer">by András Dániel Tóth</div>

      <Link to="/game">
        <div className="header-menu menu-item">New game!</div>
      </Link>

      <Link to="/edit">
        <div className="header-menu menu-item">Edit questions</div>
      </Link>
    </header>
  );
}
