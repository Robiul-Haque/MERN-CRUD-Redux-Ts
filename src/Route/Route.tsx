import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/signUp";
import SignIn from "../page/signIn";
import UserDashboard from "../layout/userDashboard";

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