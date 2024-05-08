import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";

const Nav = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 150px;

  @media (max-width: 1050px) {
    width: 140px;
  }
  @media (max-width: 900px) {
    width: 120px;
  }
  
`;
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  color: #49557e;
  font-size: 18px;

  li {
    cursor: pointer;
  }

  .active {
    padding-bottom: 2px;
    border-bottom: 2px solid #49557e;
  }

  @media (max-width: 1050px) {
    gap: 18px;
    font-size: 17px;
  }
  @media (max-width: 900px) {
    gap: 15px;
    font-size: 16px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1050px) {
    gap: 30px;
  }
  @media (max-width: 900px) {
    gap: 20px;
  }
`;
const Img = styled.img`
  @media (max-width: 1050px) {
    width: 22px;
  }
  @media (max-width: 900px) {
    width: 20px;
  }
`;
const NavSearch = styled.div`
  position: relative;
`;
const Dot = styled.div`
  position: absolute;
  min-width: 10px;
  min-height: 10px;
  background-color: tomato;
  border-radius: 5px;
  top: -8px;
  right: -8px;
`;
const Button = styled.button`
  background: transparent;
  font-size: 16px;
  color: #49557e;
  border: 1px solid tomato;
  padding: 10px 30px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff4f2;
  }

  @media (max-width: 1050px) {
    padding: 8px 25px;
  }
  @media (max-width: 900px) {
    padding: 7px 20px;
    font-size: 15px;

  }
`;

const Navbar = () => {
  const [menu, setMenu] = React.useState("Home");
  return (
    <Nav>
      <Logo src={assets.logo} />
      <NavMenu>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact us
        </li>
      </NavMenu>
      <NavRight>
        <Img src={assets.search_icon} />
        <NavSearch>
          <Img src={assets.basket_icon} />
          <Dot></Dot>
        </NavSearch>
        <Button> Sign In</Button>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
