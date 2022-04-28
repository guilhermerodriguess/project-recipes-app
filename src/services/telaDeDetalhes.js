import React from 'react';

export const getIngredientsAndMeasures = (dataRecipe) => {
  const keysFromDataRecipe = Object.keys(dataRecipe);

  const arrayOfIngredientsKeys = keysFromDataRecipe
    .filter((element) => element.includes('strIngredient'));
  const allIngredientsKeysList = arrayOfIngredientsKeys
    .map((element) => dataRecipe[element]);
  const ingredients = allIngredientsKeysList
    .filter((element) => element !== null && element !== '');

  const arrayOfMeasuresKeys = keysFromDataRecipe
    .filter((element) => element.includes('strMeasure'));
  const measureKeysAndProps = arrayOfMeasuresKeys
    .map((element) => dataRecipe[element]);

  const recipeIngredients = ingredients.map((element, index) => (
    <p
      key={ index }
      data-testid={ `${index}-ingredient-name-and-measure` }
    >
      {`- ${element} - ${measureKeysAndProps[index] || ''}`}
    </p>));

  return recipeIngredients;
};

export const requestRecipeRecomendation = async (path, funcToSetState) => {
  const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const mealURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const URL = path ? drinkURL : mealURL;
  const response = await fetch(URL);
  const { drinks, meals } = await response.json();
  const data = path ? drinks : meals;
  funcToSetState(data);
};
