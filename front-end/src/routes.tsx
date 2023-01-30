import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/login' replace />
    }, {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
])

export default Router;
