import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../organisms/Header";
import HomePageMenu from "../organisms/HomePageMenu";
import userService from "../../services/UserService";

const HomePageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const HomePageTemplate = () => {
  const navigate = useNavigate();
  const isSigned = async () => {
    const token = localStorage.getItem('userToken');
    !token &&  navigate('/'); 
        userService.getUserData('92005001-a657-4444-8379-3daeed5e784f').catch(() => navigate('/'));
  };

  useEffect(() => {
        console.log('chamou req home');
        isSigned();
  }, []);

  return (
    <HomePageContainer>
      <Header />
      <HomePageMenu />
    </HomePageContainer>
  )
};

export default HomePageTemplate;
