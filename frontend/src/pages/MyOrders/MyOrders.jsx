import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import styled from "styled-components";

const MyOrder = styled.div`
  margin: 50px 0px;

  button {
    border: none;
    padding: 12px 0px;
    border-radius: 4px;
    background-color: #ffe1e1;
    cursor: pointer;
    color: #454545;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const OrdersOrder = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 2fr 1fr;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  padding: 10px 20px;
  color: #454545;
  border: 1px solid tomato;

  img {
    width: 50px;
  }
  p span {
    color: tomato;
  }
  p b {
    font-weight: 500;
    color: #454545;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 2fr 1fr;
    row-gap: 5px;
    font-size: 12px;
    button {
      font-size: 10px;
    }
  }
`;

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <MyOrder>
      <h2>My Orders</h2>
      <Container>
        {data.map((order, index) => {
          return (
            <OrdersOrder key={index}>
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button>Track Order</button>
            </OrdersOrder>
          );
        })}
      </Container>
    </MyOrder>
  );
};

export default MyOrders;
