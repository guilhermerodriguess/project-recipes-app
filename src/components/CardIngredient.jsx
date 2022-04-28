/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

const CardIngredient = () => {
  const {
    data,
    exploreFoodsOrDrinks,
    setFilter,
    setTextFilter,
    toggleRequestAPI,
    setToggleRequestAPI,
  } = useContext(RecipeContext);
  const MAX_RECIPES = 12;
  // Filtra os 12 primeiros resultados.
  const maxRecipes = data.filter((element, index) => index < MAX_RECIPES);
  const history = useHistory();

  useEffect(() => {
    exploreFoodsOrDrinks();
  }, []);

  const redirectToPrincipalRecipe = (ingredient) => {
    setToggleRequestAPI(!toggleRequestAPI);
    setFilter('i');
    setTextFilter(ingredient);
    history.push('/foods');
  };

  // Caso o Card esteja em /foods, renderiza as chaves de Foods.
  if (history.location.pathname === '/explore/foods/ingredients') {
    return maxRecipes.map(({ strIngredient }, index) => (
      <div
        onClick={ () => {
          redirectToPrincipalRecipe(strIngredient);
        } }
        key={ Math.random() }
        href="/foods"
        data-testid={ `${index}-ingredient-card` }
        role="link"
        tabIndex={ 0 }
        onKeyDown={ null }
      >
        <h6 data-testid={ `${index}-card-name` }>
          {strIngredient}
        </h6>
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
          alt={ strIngredient }
          width="100"
          height="100"
        />
      </div>
    ));
  }

  // Caso o Card esteja em /drinks, renderiza as chaves de Drinks.
  if (history.location.pathname === '/explore/drinks/ingredients') {
    return maxRecipes.map(({ strIngredient1 }, index) => (
      <Link
        key={ Math.random() }
        onClick={ () => redirectToPrincipalRecipe(strIngredient1) }
        to="/drinks"
        data-testid={ `${index}-ingredient-card` }
      >
        <h6 data-testid={ `${index}-card-name` }>
          {strIngredient1}
        </h6>
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
          alt={ strIngredient1 }
          width="100"
          height="100"
        />
      </Link>
    ));
  }
};

export default CardIngredient;
