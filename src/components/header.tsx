import React from "react";
import "./header.scss";

export function Header() {
  return (
    <header>
      <div className="header-menu disclaimer">by András Dániel Tóth</div>

      <div className="header-menu menu-item">Play!</div>

      <div className="header-menu menu-item">Edit questions</div>
    </header>
  );
}
