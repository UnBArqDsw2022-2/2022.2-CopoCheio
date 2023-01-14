import moment from "moment";

class User {
    id?: string;
    active?: boolean;
    birthDate?: Date;
    name?: string;
    email?: string;
    age?: number;

    constructor(name?: string, email?: string, age?: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    static factoryUser(dict: any) {
        const user = new User();
        const momentNow = moment();
        const birthDateMomento = moment(user.birthDate);

        user.age = momentNow.diff(birthDateMomento, 'years');
        user.id = dict['id'];
        user.name = dict['nameComplete'];
        user.email = dict['email'];
        user.active = dict['active'];
        user.birthDate = dict['birthDate'];

        return user;
    }


    toJson = () => ({
        'name': this.name,
        'email': this.email,
        'age': this.age,
        'active': this.active,
        'birthDate': this.birthDate
    });
}

export default User;