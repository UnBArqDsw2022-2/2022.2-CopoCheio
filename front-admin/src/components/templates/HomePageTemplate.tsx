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


  useEffect(() => {
    async function isSigned() {
      try {
        const user = await userService.getUserData();
        if (!user?.id) navigate('/login');
      } catch (error) {
        navigate('/login');
      }
    };

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
