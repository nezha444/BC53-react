import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCocktailIdDetails } from 'service/cocktailService';

const CocktailDetailPage = () => {
  const { idCocktail } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getCoctailId = async () => {
      const data = await getCocktailIdDetails(idCocktail);
      setCocktail(data);
    };
    getCoctailId();
  }, [idCocktail]);

  if (!cocktail) return;
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Повернутись</Link>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strGlass} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetailPage;
