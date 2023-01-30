/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DrinkCarousel from "../organisms/DrinkCarousel";


const HomepageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const HomepageTemplate = () => {

    return (
        <HomepageContainer>

            <DrinkCarousel title='Recomendações do Site'/>

        </HomepageContainer>
        
    );
};

export default HomepageTemplate;