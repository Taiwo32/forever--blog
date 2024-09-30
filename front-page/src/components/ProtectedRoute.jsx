import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // If the user is not logged in (no token), redirect to login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Otherwise, render the protected page
    return children;
};

export default ProtectedRoute;
