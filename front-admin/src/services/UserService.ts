import axios, { AxiosError } from "axios";
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


  getUserData = async (user: User) => {
    const userId = user.id;
    const url = this.createUrl(`/user/${userId}`);

    try {
      const response = await axios.get(url);
      const user = User.factoryUser(response.data);
      console.log(user.name);
    }
    catch (error) {
      console.log(error);
    }
  }

  loginUser = async (email: string, password: string) => {
    const url = this.createUrl('session/login');

    const body = {
      "email": email,
      "password": password
    };

    try {
      const response = await axios.post(url, body);
      const token = response.data['token'];
      localStorage.setItem('userToken', token)
      return response.status;
    }

    catch (error) {
      const err = error as AxiosError;
      const message = err.response?.data as any;
      throw message["error"];
    }
  }

}

const userService = UserService.getInstance();

export default userService;
