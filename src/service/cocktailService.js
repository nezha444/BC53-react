import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getRandomCocktails = () => {
  return Promise.all(
    urls.map(async url => {
      const { data } = await axios.get(url);

      return data.drinks[0];
    })
  );
};

export const getCocktailIdDetails = async id => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios.get(url);

  return data.drinks[0];
};
