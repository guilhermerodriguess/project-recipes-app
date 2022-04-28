import React from 'react';
import { useHistory } from 'react-router-dom';

const ButtonsExploreBy = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectToExploreBy = ({ target }) => {
    history.push(`${pathname}/${target.value}`);
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
      <button data-testid="explore-surprise" type="button">Surprise me!</button>
    </>
  );
};

export default ButtonsExploreBy;
