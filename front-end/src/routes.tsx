import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterDrink from "./pages/RegisterDrink";

export const NoAuthRouter = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/login' replace />
    }, {
        path: '/login',
        element: <LoginPage></LoginPage>
    }, {
        path: '/cadastro',
        element: <h1>Hello, world!</h1>
    },
])

export const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/home' replace />
    }, {
        path: '/criar-drink',
        element: <RegisterDrink></RegisterDrink>
    }, {
        path: '/home',
        element: <h1>Hello, world!</h1>
    }
])
