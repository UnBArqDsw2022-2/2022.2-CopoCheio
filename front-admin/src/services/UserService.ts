import axios, { AxiosError } from "axios";
import ApiRequest from "./ApiRequestService";
import User from "../models/UserModel";


class UserService extends ApiRequest {
  private _user?: User;

  private static intance: UserService;

  static getInstance(): UserService {
    if (!UserService.intance) {
      UserService.intance = new UserService();
    }

    return UserService.intance;
  }

  public get user() {
    return this._user;
  }

  public set setUser(user: User | undefined) {
    if (!user)
      this._user = new User();
    else
      this._user = user;
  }


  getUserData = async () => {

    const userId = localStorage.getItem('userId')
    const url = this.createUrl(`user/${userId}`);
    const userToken = localStorage.getItem('userToken');
    const headers = {
      "authorization": userToken
    };

    try {
      this.setUser = undefined;
      const response = await axios.get(url, {
        headers: headers
      });

      const user = User.factoryUser(response.data);
      this.setUser = user;

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
