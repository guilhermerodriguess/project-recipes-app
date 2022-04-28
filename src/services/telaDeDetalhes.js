import React from 'react';

const getIngredientsAndMeasures = (dataRecipe) => {
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

export default getIngredientsAndMeasures;
