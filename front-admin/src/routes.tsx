import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const Router = createBrowserRouter([{
    path: '/', element: <LoginPage />
}])

export default Router;
