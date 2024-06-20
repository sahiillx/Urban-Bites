import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  margin: 100px 0px;

  hr {
    height: 1px;
    background-color: #e2e2e2;
    border: none;
  }
`;
const CartItems = styled.div`
  .item-item {
    margin: 10px 0px;
    color: black;

    img {
      width: 50px;
    }

    div {
      max-width: 40px;
      text-align: center;
      border: 1px solid #ebebeb;
      padding: 8px 8px;
      font-size: 12px;
    }
  }
`;

const RemoveIcon = styled.p`
  color: red;
  cursor: pointer;
  font-size: 20px;
`;
const ItemsTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  color: grey;
  font-size: max(1vw, 12px);
`;
const CartBottom = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  gap: max(12vw, 20px);

  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;
const CartTotal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  hr {
    margin: 10px 0px;
  }
  button {
    border: none;
    color: white;
    background-color: #ff4c24;
    width: max(15vw, 200px);
    padding: 12px 0px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const TotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555555;
`;
const Promocode = styled.div`
  flex: 1;

  p {
    color: #555555;
  }
  @media (max-width: 750px) {
    justify-content: start;
  }
`;
const PromoContainer = styled.div``;

const PromoInput = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  border-radius: 4px;

  input {
    background: transparent;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  button {
    width: max(10vw, 150px);
    padding: 12px 5px;
    background-color: black;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
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
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <ItemsTitle className="item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div>{cartItems[item._id]}</div>
                <p>${item.price * cartItems[item._id]}</p>
                <RemoveIcon onClick={() => removeFromCart(item._id)}>
                  X
                </RemoveIcon>
              </ItemsTitle>
            );
          }
        })}
      </CartItems>
      <CartBottom>
        <CartTotal>
          <h2>Cart Total</h2>
          <div>
            <TotalDetails>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </TotalDetails>
            <hr />
            <TotalDetails>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 3}</p>
            </TotalDetails>
            <hr />
            <TotalDetails>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+ 3}</b>
            </TotalDetails>
          </div>
          <button onClick={() => {
            navigate("/order");
          }}>Proceed to Checkout</button>
        </CartTotal>
        <Promocode>
          <PromoContainer>
            <p>If you have a promo code, Enter it here</p>
            <PromoInput>
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </PromoInput>
          </PromoContainer>
        </Promocode>
      </CartBottom>
    </CartContainer>
  );
};

export default Cart;
