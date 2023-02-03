import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DrinkPage from "./pages/DrinkPage";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/home' replace />
    }, {
        path: '/home',
        element: <HomePage />
    }, {
        path: '/login',
        element: <LoginPage />
    }, {
        path: '/userList',
        element: <div>Hello World</div>
    }, {
        path: '/drinkList',
        element: <DrinkPage />
    },
])

export default Router;
