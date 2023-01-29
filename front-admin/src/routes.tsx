import { createBrowserRouter, Navigate } from "react-router-dom";
import DrinksPage from "./pages/DrinksPage";
import HomePage from "./pages/HomePage";
import ListUsersPage from "./pages/ListUsersPage";
import LoginPage from "./pages/LoginPage";

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
        path: '/drinks',
        element: <DrinksPage />
    }, {
        path: '/userList',
        element: <ListUsersPage />
    },
]);

export default Router;
