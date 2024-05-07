import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";

const FooterContainer = styled.div`
  color: #d9d9d9;
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 8vw;
  padding-top: 80px;
  margin-top: 100px;

  hr {
    width: 100%;
    height: 2px;
    margin: 20px 0;
    background-color: grey;
  
  }
`;
const FooterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 80px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  li {
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
  h2 {
    color: #fff;
  
  }
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  li {
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
  h2 {
    color: #fff;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  li {
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
  h2 {
    color: #fff;
  }
`;
const SocialIcons = styled.div`
    img {
        width: 40px;
    margin-right: 15px;
    }
`;
const CopyRight = styled.div``;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterContent>
        <Left>
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum
          </p>
          <SocialIcons>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </SocialIcons>
        </Left>
        <Center>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </Center>
        <Right>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 123-456-789</li>
            <li>contact@tomato.com</li>
          </ul>
        </Right>
      </FooterContent>
      <hr />
      <CopyRight>Copyright 2024</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
