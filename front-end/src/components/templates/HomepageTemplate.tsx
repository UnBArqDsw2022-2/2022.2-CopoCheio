/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DrinkCarousel from "../organisms/DrinkCarousel";
import SearchBar from "../organisms/SearchBar";


const HomepageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #191C24;
  width: 100vw;
  height: 100vh;   
  gap: 16px;
  
`;

const CarouselList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    overflow: hidden;
`;


const HomepageTemplate = () => {

    return (
        <HomepageContainer>

            <SearchBar title='sla'/>

            <CarouselList>
                <DrinkCarousel title='Recomendações do Site'/>
                <DrinkCarousel title='Drinks Clássicos'/>
                <DrinkCarousel title='Top 10 favoritados'/>
            </CarouselList>
        </HomepageContainer>
        
    );
};

export default HomepageTemplate;