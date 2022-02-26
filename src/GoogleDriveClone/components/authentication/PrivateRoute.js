import React from 'react'
import { Navigate ,Outlet, useParams} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PrivateRoute() {
    const { currentUser } = useAuth();
    const folderId = useParams();

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
