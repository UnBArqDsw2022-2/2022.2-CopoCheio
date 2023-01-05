import Header from "../Header";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

var mockedNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigation
}));

describe('#Header', () => {
  test('render header correctly', () => {
    render(
      <Header />
    );
    const header = screen.getByTestId('header test');
    const title = screen.getByText('Copo Cheio Admin');
    expect(header).toBeVisible();
    expect(title).toBeVisible();
  });

  describe('when clicks on buttons', () => {
    test('navigate to homepage when clicks in title header', () => {
      render(<Header />);
      const title = screen.getByText('Copo Cheio Admin');
      userEvent.click(title);
      expect(mockedNavigation).toBeCalledWith('/');
    });

    test('calls sessionStorage when clicks in logout button', () => {
      render(<Header />);
      const logoutButton = screen.getByText('Sair');
      userEvent.click(logoutButton);
      jest.spyOn(sessionStorage, 'clear');
    });
  })
})