import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfileDesk from "./pages/ProfileDesk";

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
        path: '/user/:id',
        element: <ProfileDesk />
    }
])

export default Router;
