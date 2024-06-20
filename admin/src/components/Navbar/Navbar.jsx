import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets.js";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4%;
`;
const Logo = styled.img`
  width: max(10%, 80px);
`;
const Profile = styled.img`
  width: 40px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo src={assets.logo} alt="" />
      <Profile src={assets.profile_image} alt="" />
    </NavContainer>
  );
};

export default Navbar;
