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

  public set user(user: User | undefined) {
    if (!user)
      this._user = new User();
    else
      this._user = user;
  }


  getUserData = async () => {
    const userId = sessionStorage.getItem('userId');
    const url = this.createUrl(`user/${userId}`);
    const userToken = sessionStorage.getItem('userToken');
    const headers = {
      "authorization": userToken
    };

    try {
      this.user = undefined;
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

      sessionStorage.setItem('userToken', token);
      sessionStorage.setItem('userId', userId);
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
