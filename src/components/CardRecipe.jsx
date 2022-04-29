import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';
import DrinkFilter from './DrinkFilter';
import FoodFilter from './FoodFilter';

const CardRecipe = () => {
  const { data,
    requestAPIInitial,
    setRecipeID,
    requestAPIByFilter,
    toggleRequestAPI,
  } = useContext(RecipeContext);
  const MAX_RECIPES = 12;
  const history = useHistory();

  useEffect(() => {
    if (toggleRequestAPI) {
      return requestAPIByFilter();
    }
    requestAPIInitial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleRequestAPI]);

  // Caso o Card esteja em /foods, renderiza as chaves de Foods.
  if (history.location.pathname === '/foods') {
    return (
      <>
        <FoodFilter />
        {
          data.map(({ strMeal, strMealThumb, idMeal }, index) => {
            // Filtra os 12 primeiros resultados.
            if (index < MAX_RECIPES) {
              return (
                <div
                  key={ Math.random() }
                  data-testid={ `${index}-recipe-card` }
                  onClick={ () => {
                    history.push(`/foods/${idMeal}`);
                    setRecipeID(idMeal);
                  } }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
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
          data.map(({ strDrink, strDrinkThumb, idDrink }, index) => {
            if (index < MAX_RECIPES) {
              return (
                <div
                  key={ Math.random() }
                  data-testid={ `${index}-recipe-card` }
                  onClick={ () => {
                    history.push(`/drinks/${idDrink}`);
                    setRecipeID(idDrink);
                  } }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
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
