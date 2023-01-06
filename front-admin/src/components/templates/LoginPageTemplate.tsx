import LoginContainer from "../organism/LoginContainer";
import styled from "styled-components";

const LoginPageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const LoginPageTemplate = () => {
    return (
        <LoginPageContainer>
            <LoginContainer />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;