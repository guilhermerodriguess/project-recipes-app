import React from 'react';
import { useHistory } from 'react-router-dom';

const ButtonsExploreBy = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectToExploreBy = ({ target }) => {
    history.push(`${pathname}/${target.value}`);
  };

  const surpriseMe = async () => {
    if (pathname === '/explore/foods') {
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const { meals } = await response.json();
      history.push(`/foods/${meals[0].idMeal}`);
    }
    if (pathname === '/explore/drinks') {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const { drinks } = await response.json();
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  };

  return (
    <>
      <button
        data-testid="explore-by-ingredient"
        type="button"
        value="ingredients"
        onClick={ (e) => redirectToExploreBy(e) }
      >
        By Ingredient
      </button>
      {
        pathname === '/explore/foods'
          ? (
            <button
              data-testid="explore-by-nationality"
              type="button"
              value="nationalities"
              onClick={ (e) => redirectToExploreBy(e) }
            >
              By Nationality
            </button>
          )
          : null
      }
      <button
        data-testid="explore-surprise"
        onClick={ () => surpriseMe() }
        type="button"
      >
        Surprise me!
      </button>
    </>
  );
};

export default ButtonsExploreBy;
