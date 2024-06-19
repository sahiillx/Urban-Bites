import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";

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

const PopupContainer = styled.div`
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
  const [currState, setCurrState] = React.useState("Login");
  return (
    <>
      <Popup>
        <PopupContainer>
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
              <input type="text" placeholder="Your Name " required />
            )}

            <input type="email" placeholder="Your Email " required />
            <input type="password" placeholder="Your Password " required />
          </PopupInput>
          <button>
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
