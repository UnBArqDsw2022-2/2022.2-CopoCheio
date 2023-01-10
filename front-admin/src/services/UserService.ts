import axios from "axios";
import ApiRequest from "./ApiRequestService";
import User from "../models/UserModel";

class UserService extends ApiRequest {
  private static intance: UserService;

  static getInstance(): UserService {
    if (!UserService.intance) {
      UserService.intance = new UserService();
    }
    return UserService.intance;
  }


  getUserData = async () => {
    try {
      const response = await axios.get(`${this.createUrl()}`);
      const user = User.factoryUser(response.data);
      console.log(user.name);
    }
    catch (error) {
      console.log(error);
    }
  }

  postUserData = async (user: User) => {
    try {
      const response = await axios.post(`${this.createUrl()}`, user.toJson());
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

}

const userService = UserService.getInstance();

export default userService;
