class Category {
    id?: string;
    name?: string;

    constructor(name?: string, id?: string) {
        this.name = name;
        this.id = id;
    }

    static factoryCategory(dict: any) {
        const category = new Category();
        category.id = dict['id'];
        category.name = dict['name'];
        return category;
    }


    toJson = () => ({
        'name': this.name,
        'id': this.id
    });
}

export default Category;