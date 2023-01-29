import styled from "styled-components";
import User from "../../models/UserModel";
import Card from "./Card";

interface ListUsersInterface {
    listUsers: Array<User>;
}

const ListUsersStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    column-gap: 56px;
    row-gap: 36px;
    padding-top: 360px;
`;

const ListUsers = ({ listUsers }: ListUsersInterface) => {
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
                            onBlockUser={() => { }}
                            onDrinkRecommendation={() => { }}
                            onUnlockUser={() => { }}
                        />
                    );
                })
            }
        </ListUsersStyle >
    )
}

export default ListUsers;