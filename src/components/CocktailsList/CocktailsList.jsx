import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CocktailsList = ({ cocktails }) => {
  const location = useLocation();
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {cocktails.map(cocktail => (
        <li key={cocktail.idDrink} style={{ width: '200px' }}>
          <Link to={`/cocktail/${cocktail.idDrink}`} state={{ from: location }}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <span>{cocktail.strGlass}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CocktailsList;
