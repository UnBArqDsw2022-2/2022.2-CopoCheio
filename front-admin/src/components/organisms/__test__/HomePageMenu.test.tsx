import HomePageMenu from "../HomePageMenu";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

var mockedNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockedNavigation
}));

describe('#HomePageMenu', () => {
    test('renders cards corectly', () => {
        render(
            <HomePageMenu />
        )
        const cardUserList = screen.getByText('Lista de usuários');
        const cardDrinkList = screen.getByText('Lista de drinks');
        const cardShareDrink = screen.getByText('Indicar drinks');
        const cardRecommendedDrinks = screen.getByText('Bebidas recomendadas');

        expect(cardUserList).toBeVisible();
        expect(cardDrinkList).toBeVisible();
        expect(cardShareDrink).toBeVisible();
        expect(cardRecommendedDrinks).toBeVisible();
    });

    describe('when clicks on cards', () => {
        test('navigates to user list page', () => {
            render(
                <HomePageMenu />
            )
            const cardUserList = screen.getByText('Lista de usuários');
            userEvent.click(cardUserList);
            expect(mockedNavigation).toBeCalledWith('/userlist');
        });

        test('navigates to drink list page', () => {
            render(
                <HomePageMenu />
            )
            const cardDrinkList = screen.getByText('Lista de drinks');
            userEvent.click(cardDrinkList);
            expect(mockedNavigation).toBeCalledWith('/drinklist');
        });

        test('navigates to drink list page', () => {
            render(
                <HomePageMenu />
            )
            const cardShareDrink = screen.getByText('Indicar drinks');
            userEvent.click(cardShareDrink);
            expect(mockedNavigation).toBeCalledWith('/sharedrink');
        });

        test('navigates to recommended drinks page', () => {
            render(
                <HomePageMenu />
            )
            const cardRecommendedDrinks = screen.getByText('Bebidas recomendadas');
            userEvent.click(cardRecommendedDrinks);
            expect(mockedNavigation).toBeCalledWith('/recommendeddrinks');
        });
    });

});

