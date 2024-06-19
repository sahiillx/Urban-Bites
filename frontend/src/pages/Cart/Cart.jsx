import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";

const CartContainer = styled.div``;
const CartItems = styled.div``;
const ItemsTitle = styled.div``;


const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <CartContainer>
      <CartItems>
        <ItemsTitle>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </ItemsTitle>
        <br />
        <hr />
      </CartItems>
    </CartContainer>
  );
};

export default Cart;
