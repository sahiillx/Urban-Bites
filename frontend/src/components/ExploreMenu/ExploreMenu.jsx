import React from "react";
import styled from "styled-components";
import { menu_list } from "../../assets/assets";

const ExpMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #262626;
    font-weight: 500;
  }

  hr {
    margin: 10px 0;
    height: 2px;
    background-color: #e2e2e2;
    border: none;
  }
`;
const ExpMenuText = styled.div`
  max-width: 60%;
  color: #808080;
`;
const ExpMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  text-align: center;
  margin: 20px 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ListItem = styled.div`
  img {
    width: 7.5vw;
    min-width: 80px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.2s;
  }

  p {
    margin-top: 10px;
    color: #747474;
    font-size: max(1.4vw, 16px);
    cursor: pointer;
  }
`;

const ExploreMenu = () => {
  return (
    <ExpMenu id="explore-menu">
      <h1>Explore our menu</h1>
      <ExpMenuText>
        Choose from diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time.
      </ExpMenuText>
      <ExpMenuList>
        {menu_list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </ListItem>
          );
        })}
      </ExpMenuList>
      <hr />
    </ExpMenu>
  );
};

export default ExploreMenu;
