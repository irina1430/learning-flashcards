import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="../public/logo1.svg" alt="logo" />
      </a>
      <h1>Learn English with fun!</h1>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/table">Words</NavLink>
        <NavLink to="/game">Game</NavLink>
      </nav>
    </header>
  );
};

export default Header;
