import { createBrowserRouter } from "react-router-dom";
import TestPlayground from "./pages/Test";

const Router = createBrowserRouter([{
    path: '/',
    element: <TestPlayground />
}])

export default Router;
