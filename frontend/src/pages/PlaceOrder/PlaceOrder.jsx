import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PlaceOrderContainer = styled.form`
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
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 5,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("to place an order sign in first");
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <PlaceOrderContainer onSubmit={placeOrder}>
      <Left>
        <Title>Address</Title>
        <MultiField>
          <input
            required
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First Name"
          />
          <input
            required
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last Name"
          />
        </MultiField>
        <input
          required
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email Address"
        />
        <input
          required
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
        />
        <MultiField>
          <input
            required
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
          />
          <input
            required
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
          />
        </MultiField>
        <MultiField>
          <input
            required
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zipcode"
          />
          <input
            required
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
          />
        </MultiField>
        <input
          required
          type="text "
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
        />
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
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
              </b>
            </TotalDetails>
          </div>
          <button>Proceed to Payment</button>
        </CartTotal>
      </Right>
    </PlaceOrderContainer>
  );
};

export default PlaceOrder;
