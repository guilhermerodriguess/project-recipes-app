import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const StartButton = (id, path, url) => {
  const getKey = JSON
    .parse(localStorage
      .getItem('inProgressRecipes')) || {
    cocktails: { empty: '' }, meals: { empty: '' } };

  const isFoodOrDrink = path ? getKey.meals : getKey.cocktails;

  const isInProgress = Object.keys(isFoodOrDrink || [])
    .some((element) => element.includes(id));

  return (
    <div>
      <Link to={ `${url}/in-progress` }>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="start-btn"
        >
          {isInProgress ? 'Continue Recipe' : 'Start Recipe' }

        </button>
      </Link>
    </div>);
};

export default StartButton;
