import ApiRequest from "./ApiRequestService";
import User from "../models/UserModel";
import ApiResponse from "../models/ApiResponseModel";


class UserService extends ApiRequest {
  private _user?: User;

  private static instance: UserService;

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
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

  private _setUserToken = (token: string, userId: string) => {
    sessionStorage.setItem('userToken', token);
    sessionStorage.setItem('userId', userId);
  }

  getUserData = async () => {
    this.user = undefined;

    try {
      const userId = sessionStorage.getItem('userId');
      const response = await this.getRequest({ endPoint: `user/${userId}` });
      const user = User.factoryUser(response.data);

      this.user = user;
      return user;
    } catch (error) {
      const apiResponse = ApiResponse.factoryApiResponse(error as any);
      throw apiResponse.error;
    }
  }

  getAllCustomers = async () => {
    try {
      const response = await this.getRequest({ endPoint: `user`, params: `show=Customer` });
      let usersCutomers = [];

      for (let customer of Array.from(response.data['users'])) {
        usersCutomers.push(User.factoryUser(customer));
      }

      return { 'count': response.data['count'], 'users': usersCutomers };
    } catch (error) {
      const apiResponse = ApiResponse.factoryApiResponse(error as any);
      throw apiResponse.error;
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

      this._setUserToken(token, userId);
    } catch (error) {
      const apiResponse = ApiResponse.factoryApiResponse(error as any);
      throw apiResponse.error;
    }
  }

}

const userService = UserService.getInstance();

export default userService;
