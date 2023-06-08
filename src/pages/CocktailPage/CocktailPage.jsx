import CocktailsList from 'components/CocktailsList/CocktailsList';
import React, { useEffect, useState } from 'react';
import { getRandomCocktails } from 'service/cocktailService';

const CocktailPage = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const data = await getRandomCocktails();
      setCocktails(data);
    };
    getCocktails();
  }, []);

  return <CocktailsList cocktails={cocktails} />;
};

export default CocktailPage;
