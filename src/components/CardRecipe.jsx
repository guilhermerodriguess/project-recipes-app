import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

const CardRecipe = () => {
  const { data } = useContext(RecipeContext);
  const MAX_RECIPES = 12;
  // Filtra os 12 primeiros resultados.
  const maxRecipes = data.filter((element, index) => index < MAX_RECIPES);
  const history = useHistory();

  // Caso o Card esteja em /foods, renderiza as chaves de Foods.
  if (history.location.pathname === '/foods') {
    return maxRecipes.map(({ strMeal, strMealThumb }, index) => (
      <div key={ Math.random() } data-testid={ `${index}-recipe-card` }>
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
    ));
  }

  // Caso o Card esteja em /drinks, renderiza as chaves de Drinks.
  if (history.location.pathname === '/drinks') {
    return maxRecipes.map(({ strDrink, strDrinkThumb }, index) => (
      <div key={ Math.random() } data-testid={ `${index}-recipe-card` }>
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
    ));
  }
};

export default CardRecipe;
