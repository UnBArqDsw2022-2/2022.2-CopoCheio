import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/home' replace />
    }, {
        path: '/home',
        element: <HomePage />
    }
])

export default Router;
