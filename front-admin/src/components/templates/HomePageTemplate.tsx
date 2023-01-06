import styled from "styled-components";
import Header from "../organisms/Header";
import HomePageMenu from "../organisms/HomePageMenu";

const HomePageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const HomePageTemplate = () => (
  <HomePageContainer>
    <Header />
    <HomePageMenu />
  </HomePageContainer>
);

export default HomePageTemplate;
