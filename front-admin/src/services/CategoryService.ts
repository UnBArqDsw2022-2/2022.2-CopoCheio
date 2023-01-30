import ApiRequest from "./ApiRequestService";
import ApiResponse from "../models/ApiResponseModel";
import Category from "../models/CategoryModel";


class CategoryService extends ApiRequest {
  private _categories?: Category[]=[];
  private _categoriesName?: (string | undefined)[];
  private token?: string | null;
  private userId?: string | null;

  private static instance: CategoryService;
  static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }

    return CategoryService.instance;
  }

  public get category() {
    return this._categories;
  }
  public get categoryNames() {
    return this._categoriesName;
  }

  public set category(category: Category[] | undefined) {
    if (!category)
      this._categories = [new Category()];
    else
      this._categories = category;
  }

  private _getUserToken = () => {
    this.token=sessionStorage.getItem('userToken');
    this.userId=sessionStorage.getItem('userId');
  }

  getCategories=async ()=>{

    try {
      const response = await this.getRequest({ endPoint: 'category'});

      let categories=[];
      let categoriesName=[];

      for(let category of Array.from(response.data)){
        categories.push(Category.factoryCategory(category));
        categoriesName.push(Category.factoryCategory(category).name);
      }

      this._categories=categories;
      this._categoriesName=categoriesName;

      return categoriesName;
    } catch (error) {
      const apiResponse = ApiResponse.factoryApiResponse(error as any);
      throw apiResponse.error;
    }
  }

}


export default CategoryService;
