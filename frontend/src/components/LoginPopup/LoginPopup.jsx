import React, { useEffect } from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Popup = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  display: grid;

  p {
  }

  span {
    color: #ff4c24;
    font-weight: 500;
    cursor: pointer;
  }
`;

const PopupContainer = styled.form`
  place-self: center;
  width: max(23vw, 330px);
  color: #808080;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 30px;
  border-radius: 8px;
  font-size: 14px;
  animation: fadeIn 0.5s;

  button {
    border: none;
    padding: 10px;
    border-radius: 4px;
    color: white;
    background-color: #ff4c24;
    font-size: 15px;
    cursor: pointer;
  }
`;
const PopupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  img {
    width: 16px;
    cursor: pointer;
  }
`;
const PopupInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    outline: none;
    border: 1px solid #c9c9c9;
    padding: 10px;
    border-radius: 4px;
  }
`;
const PopupCondition = styled.div`
  margin-top: 5px;
`;

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = React.useContext(StoreContext);
  const [currState, setCurrState] = React.useState("Login");
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let new_url = url;
    if (currState === "Login") {
      new_url += "/api/user/login";
    } else {
      new_url += "/api/user/register";
    }
    const response = await axios.post(new_url, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      // loadCartData({ token: response.data.token });
      setShowLogin(false);
    } else {
      // toast.error(response.data.message);
      alert(response.data.message);
    }
  };

  return (
    <>
      <Popup>
        <PopupContainer onSubmit={onLogin}>
          <PopupTitle>
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </PopupTitle>
          <PopupInput>
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your Name "
                required
              />
            )}

            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your Email "
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Your Password "
              required
            />
          </PopupInput>
          <button type="submit">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <PopupCondition>
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </PopupCondition>
          {currState === "Login" ? (
            <p>
              Create a new Account ?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setCurrState("Login")}>Login Here</span>
            </p>
          )}
        </PopupContainer>
      </Popup>
    </>
  );
};

export default LoginPopup;
