import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';


import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const VerifyCont = styled.div`
  min-height: 60vh;
  display: grid;

  .spinner {
    width: 100px;
    height: 100px;
    place-self: center;
    border: 5px solid #bdbdbd;
    border-top-color: tomato;
    border-radius: 50%;
    animation: ${rotate} 1s infinite;
  }
`;

const Verify = () => {
  const { url } = useContext(StoreContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")

  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", { success, orderId });
    if (response.data.success) {
      navigate("/myorders");
    }
    else {
      navigate("/")
    }
  }

  useEffect(() => {
    verifyPayment();
  }, [])

  return (
    <VerifyCont>
      <div className="spinner"></div>
    </VerifyCont>
  )
}

export default Verify
