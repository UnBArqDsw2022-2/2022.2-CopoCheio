import axios, { AxiosError } from "axios";
import ApiRequest from "./ApiRequestService";
import User from "../models/UserModel";


class UserService extends ApiRequest {
  user?: User;

  private static intance: UserService;

  static getInstance(): UserService {
    if (!UserService.intance) {
      UserService.intance = new UserService();
    }

    return UserService.intance;
  }


  getUserData = async () => {
    this.user = new User();

    const userId = localStorage.getItem('userId')
    const url = this.createUrl(`user/${userId}`);
    const userToken = localStorage.getItem('userToken');
    const headers = {
      "authorization": userToken
    };

    try {
      const response = await axios.get(url, {
        headers: headers
      });

      const user = User.factoryUser(response.data);
      this.user = user;
      return user;

    } catch (error) {
      const err = error as AxiosError;
      const message = err.response?.data as any;
      throw message["error"];
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
      const userId = response.data['id'];
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', userId);
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
