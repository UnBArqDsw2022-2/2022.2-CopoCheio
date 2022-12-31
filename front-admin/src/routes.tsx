import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const Router = createBrowserRouter([{
    path: '/',
    element: <Home />,
}])

export default Router;
