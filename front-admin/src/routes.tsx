import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = createBrowserRouter([{
    path: '/',
    element: <HomePage />
}, {
    path: '/userlist',
    element: <div>Hello World</div>
}])

export default Router;
