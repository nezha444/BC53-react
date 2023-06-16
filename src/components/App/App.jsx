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

export const App = () => {
  return (
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
