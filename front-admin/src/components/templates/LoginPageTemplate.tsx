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
            <LoginContainer
                fontSizeTitle="1.5rem"
                title="Acesse sua conta"
                subtitle="Para ter acesso a nossa plataforma de controle, entre em contato com um dos nossos desenvolvedores."
                fontSizeSubtitle="1rem"
            />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;