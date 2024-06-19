import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';


const HomeContainer = styled.div`
   // Hide horizontal scroll
`;

const Home = () => {
  const [category, setCategory] = React.useState("All");
  return (
    <HomeContainer>
        <Header />
        <ExploreMenu
          category={category}
          setCategory={setCategory}
        />
        <FoodDisplay 
        category={category}
        />
        <AppDownload />
    </HomeContainer>
  )
}

export default Home