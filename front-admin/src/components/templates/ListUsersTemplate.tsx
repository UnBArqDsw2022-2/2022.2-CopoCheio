import { useEffect, useState } from "react";
import styled from "styled-components";
import User from "../../models/UserModel";
import userService from "../../services/UserService";
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
    let maxCount = 0;
    const [listUsersData, setlistUsersData] = useState<Array<User>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const showMoreUsers = async () => {
        try {
            setIsLoading(true);
            const response = await userService.getAllCustomers();
            const listUsers = listUsersData.concat(response.users);
            maxCount = response.count;
            setlistUsersData([...listUsers]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (listUsersData.length === 0 && isLoading === false) {
            console.log('requesting two times');
            
            showMoreUsers();
        }
    });

    return (
        <ListUserTemplateStyle>
            <ListUsers listUsers={listUsersData} />
            <SizedBox height="56px" />
            <MainButton
                width="160px"
                height="80px"
                children="Carregar mais"
                onClick={(e) => {
                    e.preventDefault();
                    if (listUsersData.length < maxCount) {
                        showMoreUsers();
                    }
                }}
                type={isLoading ? "loading" : "primary"}
            />
        </ListUserTemplateStyle>
    )
}

export default ListUserTemplate;