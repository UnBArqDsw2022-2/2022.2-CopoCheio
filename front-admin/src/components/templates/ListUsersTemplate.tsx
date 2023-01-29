import { useEffect } from "react";
import styled from "styled-components";
import User from "../../models/UserModel";
import Card from "../organisms/Card";

const ListUserTemplateStyle = styled.div`
    display:flex;
`;

const user = new User('Paulo', 'ph.hr.001@gmail.com');

const listUserByRequest = [user, user, user, user];

const ListUserTemplate = () => {
    useEffect(() => { }, []);
    return (
        <ListUserTemplateStyle>
            {listUserByRequest.map(function (user: User) {
                return <Card
                    cardTitle={user.email ?? ''}
                    cardType="user"
                    height="291px"
                    width="227px"
                />
            })
            }
        </ListUserTemplateStyle>
    )
}

export default ListUserTemplate;