import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../Layout/UserDashboard";
import SignIn from "../Page/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
        children: [
            {
                path: "/dashboard",
                element: <UserDashboard />
            },
        ]
    },
]);

export default router;