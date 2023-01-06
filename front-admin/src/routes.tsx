import { createBrowserRouter } from "react-router-dom";
import { DrinkPage } from "./components/pages/DrinkPage";

const Router = createBrowserRouter([{
    path: '/',
    element: <DrinkPage prop1={false} prop2={""} />
}])

export default Router;
