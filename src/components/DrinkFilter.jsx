import React, { useContext, useState } from 'react';
import RecipeContext from '../context/RecipesContext';

const RecipeFilter = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [buttonName, setButtonName] = useState('');
  const {
    filterRecipe,
    requestDrinkByButtonFilter,
    requestAPIInitial } = useContext(RecipeContext);
  const MAX_FILTERS = 5;

  const requestDrink = (category, button) => {
    if (!isFiltered || button !== buttonName) {
      requestDrinkByButtonFilter(category);
      setIsFiltered(true);
      setButtonName(button);
    } else {
      requestAPIInitial();
      setIsFiltered(false);
    }
  };

  return (
    <section>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => requestAPIInitial() }
      >
        All
      </button>
      {
        filterRecipe
          .map((filter, index) => {
            if (index < MAX_FILTERS) {
              return (
                <button
                  type="button"
                  data-testid={ `${filter.strCategory}-category-filter` }
                  key={ filter.strCategory }
                  onClick={ ({ target }) => requestDrink(
                    filter.strCategory, target.innerHTML,
                  ) }
                >
                  { filter.strCategory }
                </button>
              );
            } return null;
          })
      }
    </section>
  );
};

export default RecipeFilter;
