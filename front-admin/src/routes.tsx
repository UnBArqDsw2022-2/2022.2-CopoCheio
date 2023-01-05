import { createBrowserRouter } from "react-router-dom";
import TestPlayground from "./pages/Test";
import Header from "./components/organisms/Header";

const Router = createBrowserRouter([{
    path: '/',
    element: <TestPlayground />
}])

export default Router;
