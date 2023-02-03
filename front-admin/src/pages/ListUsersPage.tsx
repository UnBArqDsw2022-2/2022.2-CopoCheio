/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DataDisplayTemplate from "../components/templates/DataDisplayTemplate";
import User from "../models/UserModel";
import userService from "../services/UserService";

let page: number = 1;
let quantity: number = 50;
let maxCount: number = 0;

const ListUserPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<User>>([]);

    const showMoreUsers = async (page: number, quantity: number) => {
        try {
            setIsLoading(true);
            const response = await userService.getAllCustomers(page, quantity);
            const listUsers = data.concat(response.users);
            maxCount = response.count;
            setData(listUsers);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        showMoreUsers(page, quantity);
    }, [])


    return (
        <DataDisplayTemplate
            data={data}
            type="user"
            isLoading={isLoading}
            maxCount={maxCount}
            categories={[]}
            showMore={() => {
                page += 1;
                showMoreUsers(page, quantity);
            }}
        />)
};

export default ListUserPage;