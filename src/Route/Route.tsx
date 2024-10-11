import { createBrowserRouter } from "react-router-dom";
import CrudDashboard from "../layout/CrudDashboard";
import Main from "../layout/main";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import ProtectedRoute from "../Route/protectedRoute";

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
                element: <ProtectedRoute><CrudDashboard /></ProtectedRoute>
            }
        ]
    }
]);

export default router;