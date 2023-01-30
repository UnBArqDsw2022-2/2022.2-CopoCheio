import { useEffect, useState } from "react";
import DataDisplayTemplate from "../components/templates/DataDisplayTemplate";
import userService from "../services/UserService";

const ListUserPage = () => {
    let maxCount = 0;
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    const [data, setData] = useState<any[]>([]);


    const showMoreUsers = async () => {
        try {
            setIsLoading(true);
            const response = await userService.getAllCustomers();
            const listUsers = data.concat(response.users);
            maxCount = response.count;
            setData([...listUsers]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    const getUserHandle=async ()=>{
      const users=await userService.getAllCustomers();
      setData(users.users);
      setIsLoading(false);
    }

   useEffect(()=>{
    getUserHandle();
   })

    return(<DataDisplayTemplate data={data} type="user" isLoading={isLoading} maxCount={maxCount} categories={[]} showMore={showMoreUsers}/>)
 };
 
export default ListUserPage;