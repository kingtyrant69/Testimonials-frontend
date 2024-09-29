import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
    const {auth} = useAuth()
    
    return auth?.accessToken ? <Outlet/> : <Navigate to="/login" replace />
};

export default ProtectedRoute 