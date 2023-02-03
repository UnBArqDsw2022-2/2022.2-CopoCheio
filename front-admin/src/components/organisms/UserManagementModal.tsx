import { colors } from '../../styles/colors';
import styled from 'styled-components';
import Text from '../atoms/Text';
import MainButton from "../atoms/MainButton";
import Icon from "../atoms/Icon/Icon";


interface UserManagementModalInterface {
    userEmail: string;
    action: string;
    setShowModal: any;
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
    padding: 64px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
    width: 548px;
    height: 328px;

`

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 16px;

    & > button:first-child {
        padding-left: 32px;
        padding-right: 32px;
    }

    & > button:last-child span {
        padding-left: 16px !important;
        justify-content: space-around;
    }

`

const WarningWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-left: 4px solid #8CE563;
    border-radius: 8px;
    background-color: rgba(140, 229, 99, 0.1);
    padding: 16px;
    flex-wrap: wrap;

    & > span {
        padding: 4px;
        flex: 1;
        flex-basis: 100%;
        flex-shrink: 0;
        text-align: left;
    }

    & > span:first-child {
        flex: 0;
        flex-basis: 1%;
        justify-self: start;
        align-self: center;
        
    }

    & > span:nth-child(2) {
        align-self: center;
        flex: 0;
        flex-basis: 40%;
        justify-self: start;
        text-align: left;
    }

    & > span:last-child {
        padding-left: 26px;
    }

    
`

const pass = () => {
    console.log('aaa')
}

const UserManagementModal = ({
    userEmail,
    action,
    setShowModal
}: UserManagementModalInterface ) => {
    return (
        <GenericUserManagementModal
            data-testid='user-modal-container'
        >
            
            {(action==='block') ? (
                <>   
                    <Text color={colors.black} size='16px' weight='bold'>Restringir Usuário?</Text>
                    <Text color={colors.black} size='14px'>Tem certeza que deseja restringir esse usuário?</Text>
                </>
            ): <></>}

            {(action==='unlock') ? (
                <>   
                    <Text color={colors.black} size='16px' weight='bold'>Liberar Usuário?</Text>
                    <Text color={colors.black} size='14px'>Tem certeza que deseja liberar esse usuário?</Text>
                </>
            ): <></>}
            

            <WarningWrapper>
                <Icon icon='❤' size='16px' color='#8CE563' />
                <Text color={colors.black} size='12px' weight='bold'>Fique tranquilo!</Text>
                <Text color={colors.black} size='12px'>Nada está perdido, caso tenha feito besteira você poderá desfazer essa ação.</Text>
            </WarningWrapper>

            <ButtonWrapper>
                <MainButton onClick={() => {setShowModal();}} type='cancel' fontSize='14px'>Cancelar</MainButton>

                {(action==='block') ? (
                    <>   
                        <MainButton onClick={pass} type='decline' fontSize='14px' rightElement={(<Icon icon='block'></Icon>)}>
                            Restringir Usuário
                        </MainButton>
                    </>
                ): <></>}

                {(action==='unlock') ? (
                    <>   
                        <MainButton onClick={pass} type='confirm' fontSize='14px' rightElement={(<Icon icon='lock_open'></Icon>)}>
                            Liberar Usuário
                        </MainButton>
                    </>
                ): <></>}

            </ButtonWrapper>
        </GenericUserManagementModal>
    )
}

export default UserManagementModal;