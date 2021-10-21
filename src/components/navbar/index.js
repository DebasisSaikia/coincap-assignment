import React from "react";
import styled from "styled-components";
import style from "./navbarStyles";
import {AiTwotoneSetting} from 'react-icons/ai'
import {HiSearch} from 'react-icons/hi'

const NavbarWrapper = styled.div`
  ${style}
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav className="navbar">
        <ul className="nav_left">
            <li>Coins</li>
            <li>Exchanges</li>
            <li>Swap</li>
        </ul>
        <ul className="nav_center">
            <img src="https://coincap.io/static/logos/black.svg" alt="main_logo" />
        </ul>
        <ul className="nav_right">
            <HiSearch/>
            <AiTwotoneSetting/>
            <button>Connect Wallet</button>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
