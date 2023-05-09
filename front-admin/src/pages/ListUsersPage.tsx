/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DataDisplayTemplate from "../components/templates/DataDisplayTemplate";
import User from "../models/UserModel";
import userService from "../services/UserService";

let page: number = 1;
const quantity: number = 50;
let maxCount: number = 0;

const ListUserPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<User>>([]);
    const [nameQuery, setNameQuery] = useState<string>('');

    const getUsers = async (page: number, quantity: number, searchName?: string) => {
        if (searchName) page = 1;

        try {
            setIsLoading(true);
            const response = await userService.getAllCustomers(page, quantity, searchName);

            if (searchName && searchName.length !== 0) {
                const listUsers = response.users;
                setUsers(listUsers);
            } else {
                const listUsers = users.concat(response.users);
                maxCount = response.count;
                setUsers(listUsers);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getUsers(page, quantity, undefined);
    }, [])


    return (
        <DataDisplayTemplate
            data={users}
            type="user"
            isLoading={isLoading}
            setNameQuery={(e) => {
                setNameQuery(e.target.value)
                if (e.target.value.length === 0) {
                    setUsers([]);
                    getUsers(page, quantity, undefined);
                }
            }}
            onSearch={() => {
                maxCount = 0;
                getUsers(page, 999, nameQuery);
            }}
            maxCount={maxCount}
            showMore={() => {
                page += 1;
                getUsers(page, quantity, undefined);
            }}
            categories={[]}
        />)
};

export default ListUserPage;