import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const Router = createBrowserRouter([{
    path: '/',
    element: <LoginPage />
}, {
    path: '/homePage',
    element: <HomePage />
}, {
    path: '/userList',
    element: <div>Hello World</div>
},])

export default Router;
