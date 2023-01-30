import {useEffect, useState} from "react";
import styled from "styled-components";
import User from "../../models/UserModel";
import Card from "../organisms/Card";
import Text from "../atoms/Text";
import {createPortal} from "react-dom";
import UserManagementModal from "../organisms/UserManagementModal";

const ListUserTemplateStyle = styled.div`
    display: flex;
    width: 100%;
`;

const user = new User('Paulo', 'ph.hr.001@gmail.com');

const listUserByRequest = [user, user, user, user];

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

const ListUserTemplate = () => {

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

    useEffect(() => { }, []);
    return (
        <ListUserTemplateStyle>
            {
                listUserByRequest.map(function (user: User) {
                return (
                    <>
                        <Card
                            cardTitle={user.email!}
                            cardType="user"
                            height="291px"
                            width="227px"
                            onBlockUser={ () => {
                                setModalContent(ActionModal(user.email!, 'unlock', setShowModal));
                                setShowModal(true);
                            }}
                        />
                        <div style={{ width: "56px" }}></div>
                    </>
                );
            })
        }
        {showModal && createPortal(modalContent, document.body)}
        </ListUserTemplateStyle>
    )
}

export default ListUserTemplate;