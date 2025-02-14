import { createBrowserRouter } from "react-router-dom";
import CrudDashboard from "../layout/CrudDashboard";
import Main from "../layout/main";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import ProtectedRoute from "../Route/protectedRoute";
import Profile from "../Page/Profile";
import Crud from "../Page/Crud";
import ForgotPassword from "../Page/ForgotPassword";
import VerifyOtp from "../Page/VerifyOtp";
import ResetPassword from "../Page/ResetPassword";

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
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/verify-otp",
                element: <VerifyOtp />
            },
            {
                path: "/reset-password",
                element: <ResetPassword />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute><CrudDashboard /></ProtectedRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Crud />
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    },
]);

export default router;