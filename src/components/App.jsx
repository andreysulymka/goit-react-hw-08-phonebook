
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { isRefreshingSelector } from 'redux/selectors';
import { refreshUser} from 'redux/auth/authOperations';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoutes';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(()=>{
    dispatch(refreshUser())
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            path='contacts' 
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }/>
          <Route 
            path='login' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }/>
          <Route 
            path='register' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            }/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
};
 