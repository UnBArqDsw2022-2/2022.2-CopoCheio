import User from "./UserModel";

class Drink {
    id?: string;
    name?: string;
    categories?: string[];
    ingredients?: string[];
    time?: number;
    preparation?:string;
    picture?:string;
    likes?:number;
    isAlcoholic?:boolean;
    isVerified?: boolean;
    difficulty?: string;
    userId?: string;
    createdDate?:Date;
    countries?:string[];
    createdBy?:User;

    constructor(id?:string,name?: string, picture?: string,likes?:number,userId?:string,createdBy?:User,createdDate?:Date,isVerified?:boolean,ingredients?: string[],time?: number, preparation?:string,isAlcoholic?:boolean,difficulty?: string,countries?:string[],categories?: string[]) {
        this.id=id;
        this.name = name;
        this.picture = picture;
        this.time=time;
        this.preparation=preparation;
        this.ingredients=ingredients;
        this.isAlcoholic=isAlcoholic;
        this.difficulty=difficulty;
        this.countries=countries;
        this.categories=categories;
        this.likes=likes;
        this.isVerified=isVerified;
        this.userId=userId;
        this.createdBy=createdBy;
        this.createdDate=createdDate;
    }

    static factoryDrink(dict: any) {
        const drink = new Drink();

        drink.id=dict['id'];
        drink.name = dict['name'];
        drink.picture = dict['picture'];
        drink.time=dict['time'];
        drink.preparation=dict['preparation'];
        drink.ingredients=dict['ingredients'];
        drink.isAlcoholic=dict['isAlcoholic'];
        drink.difficulty=dict['difficulty'];
        drink.countries=dict['countries'];
        drink.categories=dict['categories'];
        drink.likes=dict['likes'];
        drink.isVerified=dict['isVerified'];
        drink.userId=dict['userId'];
        drink.createdBy=dict['createdBy'];
        drink.createdDate=dict['createdDate'];

        return drink;
    }


    toJson = () => ({
        "id": this.id,
        "name": this.name,
        "picture": this.picture, 
        "time": this.time,
        "preparation": this.preparation,
        "ingredients": this.ingredients,
        "createdDate": this.createdDate,
        "likes": this.likes,
        "isAlcoholic": this.isAlcoholic,
        "isVerfied": this.isVerified,
        "difficulty": this.difficulty,
        "userId": this.userId,
        "categories": this.categories,
        "countries": this.countries,
        "createdBy": this.createdBy
    });
}

export default Drink;