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
    this.user = undefined;

    try {
      const userId = sessionStorage.getItem('userId');
      const userToken = sessionStorage.getItem('userToken');

      const headers = { "authorization": userToken };
      const response = await this.getRequest({ endPoint: `user/${userId}`, headers: headers });

      const user = User.factoryUser(response.data);

      this.user = user;
      return user;
    } catch (error) {
      const err = error as any;
      throw err["data"]["message"];
    }
  }

  loginUser = async (email: string, password: string) => {

    try {
      const body = {
        "email": email,
        "password": password
      };

      const response = await this.postRequest({ endPoint: 'session/login', body: body })

      const token = response.data['token'];
      const userId = response.data['id'];

      sessionStorage.setItem('userToken', token);
      sessionStorage.setItem('userId', userId);
    }

    catch (error) {
      const err = error as any;
      throw err["data"]["message"];
    }
  }

}

const userService = UserService.getInstance();

export default userService;
