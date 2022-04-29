import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

const CardNationalities = () => {
  const { data } = useContext(RecipeContext);
  const history = useHistory();
  const MAX_RECIPES = 12;

  return (
    <>
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
};

// CardNationalities.propTypes = {
//   nationalities: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default CardNationalities;
