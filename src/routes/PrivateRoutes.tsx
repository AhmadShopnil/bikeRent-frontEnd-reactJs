import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectCurrentUser } from '../redux/api/slices/authSlice';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // You can optionally allow different roles
}

const PrivateRoutes = ({ children, allowedRoles = ["user"] }: PrivateRouteProps) => {
  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;


  if (role && allowedRoles.includes(role)) {
    return <>{children}</>;
  }

 
  return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
