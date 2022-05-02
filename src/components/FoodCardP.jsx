import { useContext, React } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/RecipesContext';
import { getIngredientsAndMeasures } from '../services/telaDeDetalhes';

const FoodCard = () => {
  const { dataRecipe } = useContext(RecipeContext);
  const history = useHistory();

  const pathFood = history.location.pathname.includes('/foods');

  const ingredients = getIngredientsAndMeasures(dataRecipe[0]);

  return (
    <div>
      <header>
        <h2
          data-testid="recipe-title"
        >
          {pathFood ? dataRecipe[0].strMeal : dataRecipe[0].strDrink}

        </h2>
        <h4 data-testid="recipe-category">
          {pathFood
            ? dataRecipe[0].strCategory : dataRecipe[0].strAlcoholic}
        </h4>
        <img
          src={ pathFood ? dataRecipe[0].strMealThumb : dataRecipe[0].strDrinkThumb }
          alt="Foto da coisa pronta"
          data-testid="recipe-photo"
          width="80 vn"
          height="80 vn"
        />
        <br />
        <p data-testid="instructions">{dataRecipe[0].strInstructions}</p>
        { ingredients.map((item, index) => (
          <li
          data-testid={ ´${index}-ingredient-step´ }
          >

          </li>
        )) }
        {pathFood || dataRecipe[0].strAlcoholic}
      </header>
    </div>
  );
};

export default FoodCard;

/*
A foto deve possuir o atributo data-testid="recipe-photo";
O título deve possuir o atributo data-testid="recipe-title";
O botão de compartilhar deve possuir o atributo data-testid="share-btn";
O botão de favoritar deve possuir o atributo data-testid="favorite-btn";
O texto da categoria deve possuir o atributo data-testid="recipe-category";
Os ingredientes devem possuir o atributo data-testid=${index}-ingredient-step, a verificação será feita pelo length do atributo.
O elemento de instruções deve possuir o atributo data-testid="instructions";
O botão para finalizar a receita deve possuir o atributo data-testid="finish-recipe-btn".
*/
