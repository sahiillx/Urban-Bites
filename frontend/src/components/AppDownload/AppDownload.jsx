import React from 'react';
import styled from 'styled-components';
import { assets } from '../../assets/assets';

const AppDownloads = styled.div`
    margin: auto auto;
    margin-top: 100px;
    font-size: max(3vw, 20px);
    text-align: center;
    font-weight: 500;
`;
const Platforms = styled.div`
    display: flex;
    justify-content: center;
    gap: max(2vw, 10px);
    margin-top: 40px;

    img {
        width: max(30vw, 120px);
        max-width: 180px;
        transition: 0.5s;
        cursor: pointer;
    }

    img:hover {
        transform: scale(1.05);
    
    }
`;


const AppDownload = () => {
  return (
    <AppDownloads id="AppDownload">
        <p>For Better Experience Download <br/> Tomato App</p>
        <Platforms>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </Platforms>
    </AppDownloads>    
  )
}

export default AppDownload