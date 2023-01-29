import { colors } from '../../styles/colors';
import styled from 'styled-components';
import Text from '../atoms/Text';
import LinkTag from '../atoms/LinkTag';
import LoginForm from '../molecules/LoginForm';
import Image from '../atoms/Image';
import MainButton from "../atoms/MainButton";


interface UserManagementModalInterface {
    userEmail: string;
    action: string;
}

const GenericUserManagementModal = styled.div`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    border-radius: 8px;
    width: clamp(300px, 30vw, 600px);
    height: clamp(200px, 30vh, 328px);
    padding: 3.5vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
    max-width: 540px;
`

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

const pass = () => {
    console.log('aaa')
}

const UserManagementModal = ({
    userEmail,
    action
}: UserManagementModalInterface ) => {
    return (
        <GenericUserManagementModal
            data-testid='user-modal-container'
        >
            <Text color={colors.black} size='16px' weight='bold'>Liberar Usuário?</Text>
            <Text color={colors.black} size='14px'>Tem certeza que deseja restringir esse usuário?</Text>
            <ButtonWrapper>
                <MainButton onClick={pass} type='cancel'>Cancelar</MainButton>
                <MainButton onClick={pass} type='decline'>
                    Restringir Usuário
                </MainButton>
            </ButtonWrapper>
        </GenericUserManagementModal>
    )
}

export default UserManagementModal;