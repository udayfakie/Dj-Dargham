import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/ddlogo (2).png";
import OPEN_MENU from "../assets/close.png";
import CLOSE_MENU from "../assets/more (1).png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const HandleClick = () => {
    setOpen((open) => !open);
    console.log(!open);
  };

  return (
    <NavContinaer>
      <LogoLinks to="/">
        <LogoImg src={logo} alt="logo" />
      </LogoLinks>
      <Ul>
        <Li key="li_1">
          <Links end to="/">
            Home
          </Links>
        </Li>
        <Li key="li_2">
          <Links to="/about">About Us</Links>
        </Li>
        <Li key="li_3">
          <Links to="/contact">Contact Us</Links>
        </Li>
      </Ul>
      {open ? (
        <BurgerMenuUl onClick={() => setOpen(!open)} open={!open}>
          <BurgerLi key="li_1">
            <Links end to="/">
              Home
            </Links>
          </BurgerLi>
          <BurgerLi key="li_2">
            <Links to="/about">About Us</Links>
          </BurgerLi>
          <BurgerLi key="li_3">
            <Links to="/contact">Contact Us</Links>
          </BurgerLi>
        </BurgerMenuUl>
      ) : (
        ""
      )}
      {open ? (
        <X open={open} onClick={() => HandleClick()} src={OPEN_MENU} alt="" />
      ) : (
        <Bars
          open={!open}
          onClick={() => HandleClick()}
          src={CLOSE_MENU}
          alt=""
        />
      )}
    </NavContinaer>
  );
};

export default Navbar;

export const NavContinaer = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  .active {
    color: #f88f54;
  }
`;

const BurgerLi = styled.li`
  padding: 10px;
  list-style-type: none;
`;
const BurgerMenuUl = styled.ul`
  z-index: 100;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-left: 550px;
  background-color: #fff;
  transform: ${({ open }) => (!open ? "translatex(0)" : "translateY(-100%)")};
  display: ${(open) => (open ? "flex" : "none")};
  width: 400px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width:415px) {
    width: 100%;
    
  }
  @media (max-width:821px) {
    width: 100%;
    
  }
`;

const X = styled.img`
  z-index: 1000;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  right: 0;
`;
const Bars = styled.img`
  z-index: 1000;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  right: 0;
  @media (min-width:821px) {
    display: none;
    
  }
`;

const LogoImg = styled.img`
  width: 150px;
`;
const Li = styled.li`
  list-style-type: none;
`;
const Ul = styled.ul`
  display: flex;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const Links = styled(NavLink)`
  color: #000;
  font-weight: 800;
  font-size: x-large;
  font-family: sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: all 2s ease-in-out;
  transition-duration: 1s;
  :hover {
    opacity: 0.8;
    background-color: gray;
    border-radius: 8px;
  }
`;

export const LogoLinks = styled(Link)`
  color: white;
  font-weight: 800;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
