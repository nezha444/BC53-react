import { Layout } from '../Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TodosPage from 'pages/TodosPage';
import GalleryPage from 'pages/GalleryPage';
import CocktailPage from 'pages/CocktailPage/CocktailPage';
import CocktailDetailPage from 'pages/CocktailDetailPage/CocktailDetailPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="cocktail" element={<CocktailPage />} />
        <Route path="cocktail/:idCocktail" element={<CocktailDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
