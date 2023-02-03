import { useEffect, useState } from "react";
import DataDisplayTemplate from "../components/templates/DataDisplayTemplate";
import categoriesService from "../services/CategoryService";
import drinksService from "../services/DrinkService";


const DrinksPage = () => {
    let maxCount = 0;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [data, setData] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);


    const showMoreDrinks = async () => {
        try {
            setIsLoading(true);
            const response = await drinksService.getDrinks();
            const listDrinks = data.concat(response.drinks);
            maxCount = response.count;
            setData([...listDrinks]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    const getDrinksHandle = async () => {
        const drinks = await drinksService.getDrinks();
        setData(drinks.drinks);
        setIsLoading(false);
    }

    const getCategoryHandle = async () => {
        const categories = await categoriesService.getCategories();
        setCategories(categories)
        setIsLoading(false);
    }

    useEffect(() => {
        getDrinksHandle();
        getCategoryHandle();
    }, [])

    return (<DataDisplayTemplate data={data} type="drink" categories={categories} maxCount={maxCount} isLoading={isLoading} showMore={showMoreDrinks} />)
};

export default DrinksPage;