import React from 'react';
import styled from 'styled-components';
import { assets } from '../../assets/assets';

const FoodItems = styled.div`
    width: 100%;
    margin: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #00000015;
    transition: 0.3s;
    animation: fadeIn 1s;
`;
const ImgCont = styled.div`

    img {
        width: 100%;
        border-radius: 15px 15px 0 0;
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


const FoodItem = ({id, name, price, description, image}) => {
  return (
    <FoodItems>
        <ImgCont>
            <img src={image} alt="" />
        </ImgCont>
        <FoodItemInfo>
            <ItemRating>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </ItemRating>
            <ItemDesc>{description}</ItemDesc>
            <ItemPrice>
                ${price}
            </ItemPrice>

        </FoodItemInfo>
    </FoodItems>
  )
}

export default FoodItem