import { useEffect } from "react";
import styled from "styled-components";
import User from "../../models/UserModel";
import Card from "../organisms/Card";

const ListUserTemplateStyle = styled.div`
    display: flex;
    width: 100%;
`;

const user = new User('Paulo', 'ph.hr.001@gmail.com');

const listUserByRequest = [user, user, user, user];

const ListUserTemplate = () => {
    useEffect(() => { }, []);
    return (
        <ListUserTemplateStyle>
            {listUserByRequest.map(function (user: User) {
                return (
                    <>
                        <Card
                            cardTitle={user.email!}
                            cardType="user"
                            userIndicationQuantity={3}
                            height="291px"
                            width="227px"
                            backgroundImage="https://viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp"
                            userBlock={false}
                            onBlockUser={()=>{}}
                            onDrinkRecommendation={()=>{}}
                            onUnlockUser={()=>{}}
                        />
                        <div style={{ width: "56px" }}></div>
                    </>
                );
            })
            }
        </ListUserTemplateStyle>
    )
}

export default ListUserTemplate;