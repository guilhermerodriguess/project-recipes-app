import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

const RecipeFilter = () => {
  const {
    filterRecipe,
    requestFoodByButtonFilter,
    requestDrinkByButtonFilter,
    requestAPIInitial } = useContext(RecipeContext);
  const MAX_FILTERS = 5;
  const history = useHistory();

  if (history.location.pathname === '/foods') {
    return (
      <section>
        <button
          type="button"
          data-testid="all-category-filter"
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
                    onClick={ () => requestFoodByButtonFilter(filter.strCategory) }
                  >
                    { filter.strCategory }
                  </button>
                );
              } return null;
            })
        }
      </section>
    );
  }

  if (history.location.pathname === '/drinks') {
    return (
      <section>
        <button
          type="button"
          data-testid="all-category-filter"
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
                    onClick={ () => requestDrinkByButtonFilter(filter.strCategory) }
                  >
                    { filter.strCategory }
                  </button>
                );
              } return null;
            })
        }
      </section>
    );
  }
};

export default RecipeFilter;
