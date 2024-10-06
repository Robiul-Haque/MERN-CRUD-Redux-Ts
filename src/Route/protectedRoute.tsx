import React from 'react';
import { useAppSelector } from '../redux/hook';
import { useCurrentToken } from '../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const protectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = useAppSelector(useCurrentToken);
    
    // Token is not valid then go to the login page
    if (!token) return <Navigate to="/sign-in" replace={true} />

    return children;
}

export default protectedRoute;
