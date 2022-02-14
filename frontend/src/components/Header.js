import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, logOut, login }) {
  const PathSignIn = (useLocation().pathname === "/sign-in")
  return (
    <header className="header">
      <Link className="header__logo" to="/"></Link>
      { loggedIn ? (
        <div className="header__menu">
          <p className="header__login">{ login }</p>
          <Link className="header__link" onClick={ logOut } to="/sign-in">Выйти</Link>
        </div>) : (
        <Link className="header__link" to={ `${PathSignIn ? "/sign-up" : "/sign-in"}` }>{ `${PathSignIn ? "Регистрация" : "Войти"}` }</Link>) }
    </header>
  );

};

export default Header;