import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};