import React from 'react';
import styled from 'styled-components';

const Headerr = styled.div`
    height: 34vw;
    margin: 30px auto;
    background: url('header_img.png') no-repeat;
    background-size: contain;
    position: relative;    
`;
const HeaderContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5vw;
    max-width: 50%;
    bottom: 10%;
    left: 6vw;
    animation: fadeIn 3s;

    h2 {
        font-weight: 500;
        color: white;
        font-size: max(4.5vw, 22px);
    }

    p {
        color: white;
        font-size: 1vw;
    }

    button {
        border: none;
        color: #747474;
        font-weight: 500;
        padding: 1vw 2.3vw;
        background-color: white;
        font-size: max(1vw, 13px);
        border-radius: 50px;
        cursor: pointer;
    }

    @media (max-width: 1050px) {
        max-width: 45%;
        
        
    }
    @media (max-width: 750px) {
        
        max-width: 65%;
        p {
            display: none;
        }
        button {
            padding: 2vw 4vw
        }
    }
`;

const Header = () => {
    return (
        <Headerr>
            <HeaderContent>

                <h2>Order your Favourite food here</h2>
                <p>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culniary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
                <button> View Menu</button>
            </HeaderContent>

        </Headerr>
    )
}

export default Header