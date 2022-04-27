import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';
import DrinkFilter from './DrinkFilter';
import FoodFilter from './FoodFilter';

const CardRecipe = () => {
  const { data, requestAPIInitial } = useContext(RecipeContext);
  const MAX_RECIPES = 12;
  const history = useHistory();

  useEffect(() => {
    requestAPIInitial();
  }, []);

  // Caso o Card esteja em /foods, renderiza as chaves de Foods.
  if (history.location.pathname === '/foods') {
    return (
      <>
        <FoodFilter />
        {
          data.map(({ strMeal, strMealThumb }, index) => {
            // Filtra os 12 primeiros resultados.
            if (index < MAX_RECIPES) {
              return (
                <div key={ strMeal } data-testid={ `${index}-recipe-card` }>
                  <h6 data-testid={ `${index}-card-name` }>
                    {strMeal}
                  </h6>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strMealThumb }
                    alt={ strMeal }
                    width="100"
                    height="100"
                  />
                </div>
              );
            } return null;
          })
        }
      </>
    );
  }

  // Caso o Card esteja em /drinks, renderiza as chaves de Drinks.
  if (history.location.pathname === '/drinks') {
    return (
      <>
        <DrinkFilter />
        {
          data.map(({ strDrink, strDrinkThumb }, index) => {
            if (index < MAX_RECIPES) {
              return (
                <div key={ strDrink } data-testid={ `${index}-recipe-card` }>
                  <h6 data-testid={ `${index}-card-name` }>
                    {strDrink}
                  </h6>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strDrinkThumb }
                    alt={ strDrink }
                    width="100"
                    height="100"
                  />
                </div>
              );
            } return null;
          })
        }
      </>
    );
  }
};

export default CardRecipe;
