import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterDrink from "./pages/RegisterDrink";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/login' replace />
    }, {
        path: '/login',
        element: <LoginPage></LoginPage>
    }, {
        path: '/cadastro',
        element: <h1>Hello, world!</h1>
    }, {
        path: '/criar-drink',
        element: <RegisterDrink></RegisterDrink>
    }
])

export default Router;
