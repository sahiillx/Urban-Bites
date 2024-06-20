import React from "react";
import styled from "styled-components";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const SideCont = styled.div`
  width: 18%;
  min-height: 100vh;
  border: 1.5px solid #a9a9a9;
  border-top: 0;
  font-size: max(1vw, 10px);
`;
const SidebarOptions = styled.div`
  padding-top: 50px;
  padding-left: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #a9a9a9;
  border-right: 0;
  padding: 8px 10px;
  border-radius: 3px 0px 0px 3px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#fff0ed;" : "white")};
  ${({ isActive }) =>
    isActive &&
    `
    border-color: tomato;
  `}

  img {
    width: 20px;
  }

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <SideCont>
      <SidebarOptions>
        <NavLink to="/add">
          <SidebarOption isActive={activePath === "/add"}>
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
          </SidebarOption>
        </NavLink>
        <NavLink to="/list">
          <SidebarOption isActive={activePath === "/list"}>
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
          </SidebarOption>
        </NavLink>
        <NavLink to="/orders">
          <SidebarOption isActive={activePath === "/orders"}>
            <img src={assets.order_icon} alt="" />
            <p>Orders Items</p>
          </SidebarOption>
        </NavLink>
      </SidebarOptions>
    </SideCont>
  );
};

export default Sidebar;
