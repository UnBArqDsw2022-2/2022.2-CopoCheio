import styled from "styled-components";
import User from "../../models/UserModel";
import Card from "./Card";
import {useState} from "react";
import {createPortal} from "react-dom";
import UserManagementModal from "../organisms/UserManagementModal";


interface ListUsersInterface {
    listUsers: Array<User>;
}

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListUsersStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    column-gap: 56px;
    row-gap: 36px;
    padding-top: 360px;
`;

const ListUsers = ({ listUsers }: ListUsersInterface) => {

    const ActionModal = (userEmail: string, action: string, setShowModal: any) => {
        console.log(action);
        return (
            <ModalWrapper>
                <UserManagementModal
                    userEmail={userEmail}
                    action={action}
                    setShowModal={setShowModal}
                />
            </ModalWrapper>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactElement | null>(null);

    return (
        <ListUsersStyle>
            {
                listUsers.map(function (user: User) {
                    return (
                        <Card
                            cardTitle={user.email!}
                            cardType="user"
                            userIndicationQuantity={3}
                            height="291px"
                            width="227px"
                            backgroundImage="https://viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp"
                            userBlock={false}
                            onBlockUser={ () => {
                                setModalContent(ActionModal(user.email!, 'block', setShowModal));
                                setShowModal(true);
                            } }
                            onDrinkRecommendation={() => { }}
                            onUnlockUser={ () => {
                                setModalContent(ActionModal(user.email!, 'unlock', setShowModal));
                                setShowModal(true);
                            } }
                        />
                    );
                })
            }

            {showModal && createPortal(modalContent, document.body)}
        </ListUsersStyle >
    )
}

export default ListUsers;