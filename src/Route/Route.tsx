import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/signUp";
import SignIn from "../page/signIn";
import TodoDashboard from "../layout/todoDashboard";
import ProtectedRoute from "../route/protectedRoute";
import Main from "../layout/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute><TodoDashboard /></ProtectedRoute>
            }
        ]
    }
]);

export default router;