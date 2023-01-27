import { createBrowserRouter, Navigate } from "react-router-dom";
import DrinksPage from "./pages/DrinksPage";
import HomePage from "./pages/HomePage";
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
        element: <div>Hello World</div>
    },
])

export default Router;
