import { createBrowserRouter } from "react-router-dom";
import TestPlayground from "./pages/Test";

const Router = createBrowserRouter([{
    path: '/',
    element: <TestPlayground />
}, {
    path: '/userlist',
    element: <div>Hello World</div>
}])

export default Router;
