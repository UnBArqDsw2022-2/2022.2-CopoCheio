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
    const isSigned = async () => {
        try {
            const user = await userService.getUserData();
            if (user?.id) navigate('/home');
        } catch (error) {
            navigate('/login');
        }
    }

    useEffect(() => {
        isSigned();
    }, [isSigned]);

    return (
        <LoginPageContainer>
            <LoginContainer />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;