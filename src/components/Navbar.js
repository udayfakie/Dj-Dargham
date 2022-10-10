import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/ddlogo (2).png";

const Navbar = () => {
  return (
    <NavContinaer>
      <LogoLinks to="/">
        <LogoImg src={logo} alt="logo" />
      </LogoLinks>
      <Ul>
        <Li key='li_1'>
          <NavbarLinks end to="/">
            Home
          </NavbarLinks>
        </Li>
        <Li key='li_2'>
          <NavbarLinks to="/about">About Us</NavbarLinks>
        </Li>
        <Li key='li_3'>
          <NavbarLinks to="/contact">Contact Us</NavbarLinks>
        </Li>
      </Ul>
    </NavContinaer>
  );
};

export default Navbar;

export const NavContinaer = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  .active {
    color: orange;
  }

  @media (min-width: 700px) {
    height: 80px;
  }
`;
const LogoImg = styled.img`
  width: 150px;
`;
export const NavbarLinks = styled(NavLink)`
  color: gray;
  font-weight: 800;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const SpecialLink = styled(NavbarLinks)`
  ${({ isActive }) =>
    isActive &&
    `
color: red`}
`;

export const LogoLinks = styled(Link)`
  color: white;
  font-weight: 800;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

const Li = styled.li`
  list-style-type: none;
`;
const Ul = styled.ul`
  display: flex;
`;
