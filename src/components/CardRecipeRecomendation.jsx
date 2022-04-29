import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/RecipesContext';

const CardRecipeRecomendation = () => {
  const MAXRECOMENDATION = 6;
  const history = useHistory();
  const pathFood = history.location.pathname.includes('/foods');
  const { recomendation } = useContext(RecipeContext);
  const recipesRecomendation = recomendation
    .filter((element, index) => index < MAXRECOMENDATION);

  return (
    <div className="recomendations">
      {recipesRecomendation.map((element, index) => (

        <div
          key={ pathFood ? element.strDrink : element.strMeal }
          data-testid={ `${index}-recomendation-card` }
          className="recipe-recomendation"
        >
          <h6 data-testid={ `${index}-recomendation-title` }>
            {pathFood ? element.strDrink : element.strMeal}
          </h6>
          <img
            data-testid={ `${index}-card-img` }
            src={ pathFood ? element.strDrinkThumb : element.strMealThumb }
            alt="Foto da receita pronta"
            width="155"
            height="155"
          />
        </div>
      ))}
    </div>
  );
};

export default CardRecipeRecomendation;
