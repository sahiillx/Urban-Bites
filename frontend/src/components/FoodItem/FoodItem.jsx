import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";

const FoodItems = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #00000015;
  transition: 0.3s;
  animation: fadeIn 1s;
`;
const ImgCont = styled.div`
    position: relative;
  img {
    width: 100%;
    border-radius: 15px 15px 0 0;
  }

  .add {
    width: 35px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
  }
`;
const FoodItemInfo = styled.div`
  padding: 20px;
`;
const ItemRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  img {
    width: 70px;
  }
`;
const ItemDesc = styled.div`
  color: #676767;
  font-size: 12px;
`;
const ItemPrice = styled.div`
  color: tomato;
  font-size: 22px;
  font-weight: 500;
  margin: 10px 0px;
`;

const ItemCounter = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 50px;
    background-color: white;

    img {
        width: 30px;
        cursor: pointer;
    }
`;


const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = React.useState(0);

  return (
    <FoodItems>
      <ImgCont>
        <img src={image} alt="" />
        {!itemCount ? (
          <img className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <ItemCounter>
                <img onClick={()=> setItemCount(prev=> prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=> setItemCount(prev=> prev+1)} src={assets.add_icon_green} alt="" />
          </ItemCounter>
        )}
      </ImgCont>
      <FoodItemInfo>
        <ItemRating>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </ItemRating>
        <ItemDesc>{description}</ItemDesc>
        <ItemPrice>${price}</ItemPrice>
      </FoodItemInfo>
    </FoodItems>
  );
};

export default FoodItem;
