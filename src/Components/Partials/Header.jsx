import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/logo2.svg"
import { StyledHeader } from "./Header.Styled";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <NavLink to="/">
          <img src={Logo2} alt="Our company logo" />
        </NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="/hotels">Hoteller og destinationer</NavLink>
          </li>
          <li>
            <NavLink to="/rooms">Værelser</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservationer</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
