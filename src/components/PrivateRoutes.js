import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector, isRefreshingSelector } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    const isRefreshing = useSelector(isRefreshingSelector);
 
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};