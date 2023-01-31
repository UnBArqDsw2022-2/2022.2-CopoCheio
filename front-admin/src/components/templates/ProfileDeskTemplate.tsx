import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../organisms/Header";
import userService from "../../services/UserService";

const ProfileDeskContainer = styled.section`
  display: flex;
  padding: 32px;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1440px;
  height: 1024px;
  background-color: #191c24;
`;

const ProfileDeskTemplate = () => {
  const navigate = useNavigate();

  async function isSigned() {}

  return (
    <ProfileDeskContainer>
      <Header />
    </ProfileDeskContainer>
  );
};

export default ProfileDeskTemplate;
