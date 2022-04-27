import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';

const RecipeFilter = () => {
  const { filterRecipe } = useContext(RecipeContext);
  const MAX_FILTERS = 5;
  return (
    <section>
      <button
        type="button"
        data-testid="all-category-filter"
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
