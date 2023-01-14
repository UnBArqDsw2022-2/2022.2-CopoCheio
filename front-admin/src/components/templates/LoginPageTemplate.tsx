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
        const token = localStorage.getItem('userToken');
        token &&  navigate('/Home');
        userService.getUserData('92005001-a657-4444-8379-3daeed5e784f').then((response) => {
            response && navigate('/Home');
        }).catch(() => navigate('/'));
    }
  
    useEffect(() => {
        console.log('chamou req login');
        isSigned();
    }, []);

    return (
        <LoginPageContainer>
            <LoginContainer />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;