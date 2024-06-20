import React from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrderContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  margin: 100px 0px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Left = styled.div`

  width: 100%;
  max-width: max(30%, 500px);

  input {
    margin-bottom: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    outline-color: tomato;
  }
`;
const Right = styled.div`
  width: 100%;
  max-width: max(40%, 500px);
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;
const MultiField = styled.div`
  display: flex;
  gap: 10px;

  input {
    margin-bottom: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    outline-color: tomato;
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
    margin-top: 50px;
    border: none;
    background-color: tomato;
    color: white;
    padding: 12px 30px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const TotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555555;
`;

const PlaceOrder = () => {
  const { getTotalCartAmount } = React.useContext(StoreContext);
  return (
    <PlaceOrderContainer>
      <Left>
        <Title>Address</Title>
        <MultiField>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </MultiField>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <MultiField>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </MultiField>
        <MultiField>
          <input type="text" placeholder="Zipcode" />
          <input type="text" placeholder="Country" />
        </MultiField>
        <input type="text " placeholder="Phone" />
      </Left>
      <Right>
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
          <button>Proceed to Payment</button>
        </CartTotal>
      </Right>
    </PlaceOrderContainer>
  );
};

export default PlaceOrder;
