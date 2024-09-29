import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../Layout/UserDashboard";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
        children: [
            {
                path: "/dashboard",
                element: <UserDashboard />
            },
        ],
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
]);

export default router;