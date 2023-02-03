import ApiRequest from "./ApiRequestService";
import Drink from "../models/DrinkModel";
import ApiResponse from "../models/ApiResponseModel";


class DrinkService extends ApiRequest {
  private _drinks?: Drink[] = [];
  private token?: string | null;
  private userId?: string | null;

  private static instance: DrinkService;

  static getInstance(): DrinkService {
    if (!DrinkService.instance) {
      DrinkService.instance = new DrinkService();
    }

    return DrinkService.instance;
  }

  public get drink() {
    return this._drinks;
  }

  public set drink(drink: Drink[] | undefined) {
    if (!drink)
      this._drinks = [new Drink()];
    else
      this._drinks = drink;
  }


  getDrinks = async () => {

    try {
      const response = await this.getRequest({ endPoint: 'drink' });

      let drinks = [];

      for (let drink of Array.from(response.data['drinks'])) {
        drinks.push(Drink.factoryDrink(drink));
      }

      return { 'count': response.data['count'], 'drinks': drinks };
    } catch (error) {
      const apiResponse = ApiResponse.factoryApiResponse(error as any);
      throw apiResponse.error;
    }
  }

}



const drinksService = DrinkService.getInstance();

export default drinksService;
