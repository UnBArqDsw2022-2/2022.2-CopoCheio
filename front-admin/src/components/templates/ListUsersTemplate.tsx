import { useEffect, useState } from "react";
import styled from "styled-components";
import User from "../../models/UserModel";
import MainButton from "../atoms/MainButton";
import SizedBox from "../atoms/SizedBox";
import ListUsers from "../organisms/ListUsers";

const ListUserTemplateStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
`;

const ListUserTemplate = () => {
    const user = new User('Paulo', 'ph.hr.001@gmail.com');
    const [listUserByRequest, setListUserByRequest] = useState<Array<User>>([]);

    const showMoreUsers = () => {
        for (let index = 0; index < 16; index++) {
            listUserByRequest.push(user);
        }

        setListUserByRequest([...listUserByRequest]);
    }

    useEffect(() => { }, []);

    return (
        <ListUserTemplateStyle>
            {listUserByRequest.length !== 0
                ? <ListUsers listUsers={listUserByRequest} />
                : null
            }

            <SizedBox height="56px" />
            <MainButton
                children="Carregar mais"
                onClick={showMoreUsers}
            />
        </ListUserTemplateStyle>
    )
}

export default ListUserTemplate;