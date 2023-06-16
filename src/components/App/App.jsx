import { Layout } from '../Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TodosPage from 'pages/TodosPage';
import GalleryPage from 'pages/GalleryPage';
import CocktailPage from 'pages/CocktailPage/CocktailPage';
import CocktailDetailPage from 'pages/CocktailDetailPage/CocktailDetailPage';
import { RegisterPage } from 'pages/RegisterPage';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefresher } from 'redux/auth/authSeletors';



export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  const isRefresher = useSelector(selectIsRefresher);

   return ( isRefresher ? <p>User contacts are loading</p> : 
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/todos" component={<RegisterPage />} />
          }
        />

        <Route
          path="todos"
          element={
            <PrivateRoute redirectTo="/register" component={<TodosPage />} />
          }
        />
        <Route
          path="gallery"
          element={
            <PrivateRoute redirectTo="/register" component={<GalleryPage />} />
          }
        />
        <Route
          path="cocktail"
          element={
            <PrivateRoute redirectTo="/register" component={<CocktailPage />} />
          }
        />
        <Route
          path="cocktail/:idCocktail"
          element={
            <PrivateRoute
              redirectTo="/register"
              component={<CocktailDetailPage />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
