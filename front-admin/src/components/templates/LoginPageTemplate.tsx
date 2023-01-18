import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../organisms/LoginContainer";
import userService from "../../services/UserService";

const LoginPageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const LoginPageTemplate = () => {
    const navigate = useNavigate();
    const isSigned = () => {
        userService.getUserData()
            .then((user) => { if (user?.id) navigate('/home'); })
            .catch(() => navigate('/login'));
    }

    useEffect(() => {
        isSigned();
    }, []);

    return (
        <LoginPageContainer>
            <LoginContainer />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;