import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const Food = styled.div`

  margin-top: 30px;

  h2 {
    font-size: max(2vw, 24px);
    font-weight: 600;
  }
`;

const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-top: 30px;
  gap: 30px;
  row-gap: 30px;
`;

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <Food id="food-display">
      <h2>Top dishes near you</h2>
      <FoodList>
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </FoodList>
    </Food>
  );
};

export default FoodDisplay;
