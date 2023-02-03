import { createBrowserRouter, Navigate } from "react-router-dom";
import DrinksPage from "./pages/DrinksPage";
import HomePage from "./pages/HomePage";
import ListUsersPage from "./pages/ListUsersPage";
import LoginPage from "./pages/LoginPage";
import RecomendedDrinksPage from "./pages/RecomendedDinksPage";

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
        path: '/drinklist',
        element: <DrinksPage />
    }, {
        path: '/userList',
        element: <ListUsersPage />
    },
    {
        path: '/recommendeddrinks',
        element: <RecomendedDrinksPage />
    },
]);

export default Router;
