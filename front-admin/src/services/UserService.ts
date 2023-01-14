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


  getUserData = async (id: string) => {
    const url = this.createUrl(`user/${id}`);
    const userToken = localStorage.getItem('userToken');
    const headers = {
      "authorization": userToken
    };

    try {
      const response = await axios.get(url,{
        headers: headers
      });

      const user = User.factoryUser(response.data);
      
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
      const id = response
      localStorage.setItem('userToken', token)
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
