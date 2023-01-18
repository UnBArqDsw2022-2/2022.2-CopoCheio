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

    useEffect(() => {
        async function isSigned() {
            try {
                const user = await userService.getUserData();
                if (user?.id) navigate('/home');
            } catch (error) {
                navigate('/login');
            }
        }

        isSigned();
    }, []);

    return (
        <LoginPageContainer>
            <LoginContainer />
        </LoginPageContainer>
    );
};

export default LoginPageTemplate;